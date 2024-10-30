import Text from '@gdg/components/common/typography/Text';

import uploadthumbnail from '@gdg/assets/thumbnail/uploadthumbnail.svg';

import {
  Wrapper,
  ThumbnailContainer,
  ThumbnailElement,
  CategoryContainer,
  CategoryElement,
  CategoryCard,
  ButtonContainer,
} from './TechBlogPostPage.style';
import {
  StyledSaveBtn,
  StyledPostBtn,
} from './components/MarkdownEditor.style';

const TechBlogPostPage = () => {
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
  return (
    <Wrapper>
      <ThumbnailContainer>
        <Text size='lg' weight='bold'>
          썸네일 설정
        </Text>
        <ThumbnailElement>
          <img src={uploadthumbnail} alt='please upload thumbnail.' />
          <StyledPostBtn>썸네일 업로드</StyledPostBtn>
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
