import { useState, useRef, ChangeEvent } from 'react';

import Text from '@gdg/components/common/typography/Text';

import uploadthumbnail from '@gdg/assets/thumbnail/uploadthumbnail.svg';

import { useBlogPost } from '../../provider/TechBlog/index';
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
} from './TechBlogPostPage.style';
import {
  StyledSaveBtn,
  StyledPostBtn,
} from './components/MarkdownEditor.style';
import styled from '@emotion/styled';

const TechBlogPostPage = () => {
  const context = useBlogPost();
  const [thumbnail, setThumbnail] = useState(uploadthumbnail);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { blogPost } = context;
  console.log(blogPost);

  const thumbnailUploadClick = () => {
    // 이미지 input으로 받아서
    // useImageUpload로 이미지 url 반환받고
    // 그걸 blogPost의 thumbnailUrl에 저장
    alert('삭제');
  };

  const thumbnailDeleteClick = () => {
    setThumbnail(uploadthumbnail);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        setThumbnail(result);
      };

      reader.readAsDataURL(file);
    }
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
            <ThumbnailUploadButton htmlFor='upload-input'>
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
          {categories.map((category, index) => (
            <CategoryCard key={index + 1}>{category.kor}</CategoryCard>
          ))}
        </CategoryElement>
        <ButtonContainer>
          <StyledPostBtn>출간하기</StyledPostBtn>
          <StyledSaveBtn>취소하기</StyledSaveBtn>
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
