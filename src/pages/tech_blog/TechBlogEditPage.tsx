import { Editor } from '@toast-ui/react-editor';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MarkdownEditorLight from '@gdg/pages/tech_blog/components/editor/MarkdownEditorLight';
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
} from '@gdg/pages/tech_blog/style/MarkdownEditor.style';
import { usePostBlog } from '@gdg/apis/hooks/techblog/usePostBlog';
import MarkdownEditorDark from '@gdg/pages/tech_blog/components/editor/MarkdownEditorDark';
import { useBlogPost } from '@gdg/pages/tech_blog/context/index';
import useImageHandler from '@gdg/pages/tech_blog/hooks/useImageHandler';

const TechBlogEditPage = () => {
  const context = useBlogPost();
  const { blogPost, setBlogPost } = context;
  const [mode, setMode] = useState(true);
  const titleRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>(null);
  const { handleImage } = useImageHandler();
  const { mutate } = usePostBlog();
  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleMode = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      setBlogPost((prev) => ({
        ...prev,
        content: markdown,
      }));
    }
    setMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(blogPost.content);
    }
  }, [blogPost.content]);

  const handleSubmit = useCallback(() => {
    if (!editorRef.current) return;

    const markdown = editorRef.current.getInstance().getMarkdown();

    setBlogPost((prev) => ({
      ...prev,
      title: titleRef.current?.value || prev.title,
      content: markdown || prev.content,
      status: 'SAVED',
    }));

    navigate('/write/post');
  }, [setBlogPost, navigate]);

  const handleTempSave = useCallback(() => {
    if (!editorRef.current) return;

    const markdown = editorRef.current.getInstance().getMarkdown();
    const newTitle = titleRef.current?.value || blogPost.title;
    const newContent = markdown || blogPost.content;

    setBlogPost((prev) => ({
      ...prev,
      title: newTitle,
      content: newContent,
      status: 'TEMPORAL',
    }));

    mutate({
      title: newTitle,
      content: newContent,
      status: 'TEMPORAL',
      thumbnailUrl: null,
      category: 'ETC',
    });
  }, [blogPost.content, blogPost.title, setBlogPost, mutate]);

  return (
    <Wrapper>
      <Container>
        <TitleContainer
          ref={titleRef}
          placeholder='제목을 입력해주세요'
          defaultValue={blogPost.title}
        />
        {mode && (
          <MarkdownEditorDark
            editorRef={editorRef}
            handleImage={handleImage}
            initialContent={blogPost.content}
          />
        )}
        {!mode && (
          <MarkdownEditorLight
            editorRef={editorRef}
            handleImage={handleImage}
            initialContent={blogPost.content}
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
  );
};

export default TechBlogEditPage;
