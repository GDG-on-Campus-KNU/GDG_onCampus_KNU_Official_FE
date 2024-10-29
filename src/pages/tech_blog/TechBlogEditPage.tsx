import { useState, useRef, useCallback } from 'react';

import {
  Wrapper,
  Container,
  TitleContainer,
  NavBarContainer,
  StyledOutBtn,
  StyledModeBtn,
  StyledPostBtn,
  StyledSaveBtn,
  Box,
} from './components/MarkdownEditor.style';
import MarkdownEditorDark from './components/MarkdownEditorDark';
import MarkdownEditorLight from './components/MarkdownEditorLight';
import useImageHandler from './hooks/useImageHandler';
import { Editor } from '@toast-ui/react-editor';

const TechBlogEditPage = () => {
  const [mode, setMode] = useState(true);
  const editorRef = useRef<Editor>(null);
  const { handleImage } = useImageHandler();

  const handleMode = () => {
    setMode(!mode);
  };

  const handleSubmit = useCallback(() => {
    if (!editorRef.current) return;

    const markdown = editorRef.current.getInstance().getMarkdown();
    const html = editorRef.current.getInstance().getHTML();

    console.log('markdown', markdown);
    console.log('html', html);
  }, []);

  return (
    <Wrapper>
      <Container>
        <TitleContainer placeholder='제목을 입력해주세요' />
        {mode && (
          <MarkdownEditorDark editorRef={editorRef} handleImage={handleImage} />
        )}
        {!mode && (
          <MarkdownEditorLight
            editorRef={editorRef}
            handleImage={handleImage}
          />
        )}
        <NavBarContainer>
          <Box>
            <StyledOutBtn>나가기</StyledOutBtn>
            <StyledModeBtn onClick={handleMode}>
              {mode ? '다크 모드' : '라이트 모드'}
            </StyledModeBtn>
          </Box>
          <Box>
            <StyledSaveBtn>임시저장</StyledSaveBtn>
            <StyledPostBtn onClick={handleSubmit}>출간하기</StyledPostBtn>
          </Box>
        </NavBarContainer>
      </Container>
    </Wrapper>
  );
};

export default TechBlogEditPage;
