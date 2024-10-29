import { useState } from 'react';

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

const TechBlogEditPage = () => {
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <Wrapper>
      <Container>
        <TitleContainer placeholder='제목을 입력하세요' />
        {mode && <MarkdownEditorDark />}
        {!mode && <MarkdownEditorLight />}
        <NavBarContainer>
          <Box>
            <StyledOutBtn>나가기</StyledOutBtn>
            <StyledModeBtn onClick={handleMode}>
              {mode ? '다크 모드' : '라이트 모드'}
            </StyledModeBtn>
          </Box>
          <Box>
            <StyledSaveBtn>임시저장</StyledSaveBtn>
            <StyledPostBtn>출간하기</StyledPostBtn>
          </Box>
        </NavBarContainer>
      </Container>
    </Wrapper>
  );
};

export default TechBlogEditPage;
