import Text from '@gdg/components/common/typography/Text';
import {
  SubtitleTextContainer,
  TitleTextContainer,
} from '@gdg/components/feature/header/admin/AdminTitle.style';

import { TitleWrapper } from '@gdg/pages/apply/components/ApplyForm.style';

import styled from '@emotion/styled';

const TechBlogTitle = () => {
  return (
    <Layout>
      <HeaderLayout>
        <TitleWrapper>
          <TitleTextContainer>
            <Text size='xxl' weight='bold'>
              테크 블로그
            </Text>
            <SubtitleTextContainer>
              <Text size='lg' weight='bold'>
                Tech blog
              </Text>
              <Text size='sm' weight='light'>
                GDG on Campus KNU
              </Text>
            </SubtitleTextContainer>
          </TitleTextContainer>
        </TitleWrapper>
      </HeaderLayout>
    </Layout>
  );
};

export default TechBlogTitle;

const Layout = styled.header`
  display: flex;
  justify-content: flex-start;
`;

const HeaderLayout = styled.div`
  padding: 52px 30px;
  margin: 45px 30px;

  @media (max-width: 500px) {
    margin-top: 75px;
    padding-bottom: 20px;
  }
`;
