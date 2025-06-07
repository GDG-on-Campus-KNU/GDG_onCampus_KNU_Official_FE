import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Wrapper,
  Container,
  TitleContainer,
  NavBarContainer,
  StyledOutBtn,
  StyledPostBtn,
  StyledSaveBtn,
  Box,
} from '@gdg/pages/tech_blog/style/MarkdownEditor.style';
import { usePostBlog } from '@gdg/apis/hooks/techblog/usePostBlog';
import { useBlogPost } from '@gdg/pages/tech_blog/context/index';

import MarkdownEditor from './components/editor/MarkdownEditor';

const TechBlogEditPage = () => {
  const context = useBlogPost();
  const { blogPost, setBlogPost } = context;

  const [markdown, setMarkdown] = useState<string>(blogPost.content);
  const titleRef = useRef<HTMLInputElement>(null);

  const { mutate } = usePostBlog();
  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    setBlogPost((prev) => ({
      ...prev,
      title: titleRef.current?.value || prev.title,
      content: markdown || prev.content,
      status: 'SAVED',
    }));

    navigate('/write/post');
  }, [setBlogPost, navigate, markdown]);

  const handleTempSave = useCallback(() => {
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
  }, [blogPost, markdown, setBlogPost, mutate]);

  return (
    <Wrapper>
      <Container>
        <TitleContainer
          ref={titleRef}
          placeholder='제목을 입력해주세요'
          defaultValue={blogPost.title}
        />
        <MarkdownEditor value={markdown} onChange={setMarkdown} />
        <NavBarContainer>
          <Box>
            <StyledOutBtn>나가기</StyledOutBtn>
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
