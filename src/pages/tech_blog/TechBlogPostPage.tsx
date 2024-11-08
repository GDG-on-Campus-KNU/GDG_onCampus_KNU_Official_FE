import { useState, useRef, ChangeEvent } from 'react';

import Text from '@gdg/components/common/typography/Text';

import {
  StyledSaveBtn,
  StyledPostBtn,
} from '@gdg/pages/tech_blog/Components/MarkdownEditor.style';
import {
  Wrapper,
  ThumbnailContainer,
  ThumbnailElement,
  CategoryContainer,
  CategoryElement,
  CategoryCard,
  ButtonContainer,
  ThumbnailUploadButton,
  ThumbnailImage,
  ThumbnailButtonContainer,
  ThumbnailButton,
} from '@gdg/pages/tech_blog/TechBlogPostPage.style';
import { useBlogPost } from '@gdg/pages/tech_blog/context/index';
import useImageHandler from '@gdg/pages/tech_blog/hooks/useImageHandler';

import uploadthumbnail from '@gdg/assets/thumbnail/uploadthumbnail.svg';

import { usePostBlog } from '@gdg/apis/hooks/techblog/usePostBlog';

import styled from '@emotion/styled';

const TechBlogPostPage = () => {
  const context = useBlogPost();
  const [thumbnail, setThumbnail] = useState(uploadthumbnail);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { handleImage } = useImageHandler();
  const { mutate } = usePostBlog();

  const { blogPost, setBlogPost } = context;

  const thumbnailUploadClick = () => {
    // 이미지 input으로 받아서
    // useImageUpload로 이미지 url 반환받고
    // 그걸 blogPost의 thumbnailUrl에 저장
    setBlogPost((prev) => ({
      ...prev,
      thumbnailUrl: null,
    }));
  };

  const thumbnailDeleteClick = () => {
    setThumbnail(uploadthumbnail);
    alert('업로드한 썸네일 이미지가 삭제되었습니다.');
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        handleImage(file, console.log);
        setThumbnail(result);
      };

      reader.readAsDataURL(file);
    }
  };

  const categoryCardClick = (
    cate: 'BACKEND' | 'FRONTEND' | 'ANDROID' | 'AI' | 'DESIGN' | 'ETC'
  ) => {
    setBlogPost((prev) => ({
      ...prev,
      category: cate || prev.category,
    }));
  };

  const goBack = () => {
    window.history.back();
  };

  const postBlog = () => {
    mutate(blogPost);
  };

  return (
    <Wrapper>
      <ThumbnailContainer>
        <Text size='lg' weight='bold'>
          썸네일 설정
        </Text>
        <ThumbnailElement>
          <ThumbnailImage src={thumbnail} alt='please upload thumbnail.' />
          {thumbnail === uploadthumbnail && (
            <ThumbnailUploadButton
              htmlFor='upload-input'
              onClick={thumbnailUploadClick}
            >
              썸네일 업로드
            </ThumbnailUploadButton>
          )}
          {thumbnail !== uploadthumbnail && (
            <ThumbnailButtonContainer>
              <ThumbnailButton htmlFor='upload-input'>재업로드</ThumbnailButton>
              <ThumbnailButton onClick={thumbnailDeleteClick}>
                제거
              </ThumbnailButton>
            </ThumbnailButtonContainer>
          )}
          <InputFile
            type='file'
            id='upload-input'
            ref={inputFileRef}
            onChange={handleImageUpload}
          />
        </ThumbnailElement>
      </ThumbnailContainer>
      <CategoryContainer>
        <Text size='lg' weight='bold'>
          카테고리 설정
        </Text>
        <CategoryElement>
          {categories.map((category) => (
            <CategoryCard
              key={category.eng}
              onClick={() =>
                categoryCardClick(
                  category.eng as
                    | 'BACKEND'
                    | 'FRONTEND'
                    | 'ANDROID'
                    | 'AI'
                    | 'DESIGN'
                    | 'ETC'
                )
              }
            >
              {category.kor}
            </CategoryCard>
          ))}
        </CategoryElement>
        <ButtonContainer>
          <StyledPostBtn onClick={postBlog}>출간하기</StyledPostBtn>
          <StyledSaveBtn onClick={goBack}>취소하기</StyledSaveBtn>
        </ButtonContainer>
      </CategoryContainer>
    </Wrapper>
  );
};

export default TechBlogPostPage;

const InputFile = styled.input`
  display: none;
`;

const categories = [
  {
    kor: '백엔드',
    eng: 'BACKEND',
  },
  {
    kor: '프론트엔드',
    eng: 'FRONTEND',
  },
  {
    kor: '안드로이드',
    eng: 'ANDROID',
  },
  {
    kor: 'AI',
    eng: 'AI',
  },
  {
    kor: '디자이너',
    eng: 'DESIGN',
  },
  {
    kor: '기타',
    eng: 'ETC',
  },
];
