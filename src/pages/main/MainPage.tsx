import { useMediaQuery } from 'react-responsive';

import MainFooter from '@gdsc/components/feature/footer/MainFooter';
import MobileFooterMobile from '@gdsc/components/feature/footer/MainFooterMobile';

import Content from '@gdsc/pages/main/components/Content';
import MainRound from '@gdsc/pages/main/components/MainRound';
import Star from '@gdsc/pages/main/components/Star';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const DisplayMainLayout = styled(DisplayLayout)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      <DisplayMainLayout>
        <Content />
        <MainRound />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
        {isMobile ? <MobileFooterMobile /> : <MainFooter />}
      </DisplayMainLayout>
    </>
  );
};

export default MainPage;
