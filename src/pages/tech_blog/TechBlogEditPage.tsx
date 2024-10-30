import { useState, useRef, useCallback, useEffect, useContext } from 'react';

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
import { BlogPostContext } from './context/BlogPostContext';
import useImageHandler from './hooks/useImageHandler';
import { useInitRequest } from './hooks/useInitRequest';
import { Editor } from '@toast-ui/react-editor';

const TechBlogEditPage = () => {
  const context = useInitRequest();
  const [mode, setMode] = useState(true);
  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>(null);
  const { handleImage } = useImageHandler();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleMode = () => {
    setMode(!mode);
  };

  const { setBlogPost } = context;
  const handleSubmit = useCallback(() => {
    if (!editorRef.current) return;

    const markdown = editorRef.current.getInstance().getMarkdown();

    setBlogPost((prev) => ({
      ...prev,
      title: titleRef.current?.value || prev.title,
      content: markdown || prev.content,
      status: 'SAVED',
    }));
  }, [setBlogPost]);

  const handleTempSave = useCallback(() => {
    if (!editorRef.current) return;

    const markdown = editorRef.current.getInstance().getMarkdown();

    setBlogPost((prev) => ({
      ...prev,
      title: titleRef.current?.value || prev.title,
      content: markdown || prev.content,
      status: 'TEMPORAL',
    }));
  }, [setBlogPost]);

  return (
    <BlogPostContext.Provider value={context}>
      <Wrapper>
        <Container>
          <TitleContainer ref={titleRef} placeholder='제목을 입력해주세요' />
          {mode && (
            <MarkdownEditorDark
              editorRef={editorRef}
              handleImage={handleImage}
            />
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
              <StyledSaveBtn onClick={handleTempSave}>임시저장</StyledSaveBtn>
              <StyledPostBtn onClick={handleSubmit}>출간하기</StyledPostBtn>
            </Box>
          </NavBarContainer>
        </Container>
      </Wrapper>
    </BlogPostContext.Provider>
  );
};

export default TechBlogEditPage;
