import { lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import styled from '@emotion/styled';
import Content from '@gdg/pages/main/components/Content';
import MainRound from '@gdg/pages/main/components/MainRound';
import { MainMetaData } from '@gdg/router/components/MetaData';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const MainFooterMobile = lazy(
  () => import('@gdg/components/feature/footer/MainFooterMobile')
);
const MainFooter = lazy(
  () => import('@gdg/components/feature/footer/MainFooter')
);

const Star = lazy(() => import('@gdg/pages/main/components/Star'));

const DisplayMainLayout = styled(DisplayLayout)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      <MainMetaData />
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
        {isMobile ? <MainFooterMobile /> : <MainFooter />}
      </DisplayMainLayout>
    </>
  );
};

export default MainPage;
