import { lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import CrossShape from '@gdg/components/feature/star/Cross';

import Content from '@gdg/pages/main/components/Content';
import MainRound from '@gdg/pages/main/components/MainRound';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import styled from '@emotion/styled';
import { MainMetaData } from '@gdg/router/components/MetaData';

const MainFooterMobile = lazy(
  () => import('@gdg/components/feature/footer/MainFooterMobile')
);
const MainFooter = lazy(
  () => import('@gdg/components/feature/footer/MainFooter')
);

const Star = lazy(() => import('@gdg/components/feature/star/Star'));

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
        {[...Array(5)].map((_, index) => (
          <CrossShape
            key={index}
            top={`${Math.random() * (25 - 5) + 5}%`}
            left={`${Math.random() * (95 - 5) + 5}%`}
          />
        ))}
        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * (30 - 5) + 5}%`}
            left={`${Math.random() * (95 - 5) + 5}%`}
          />
        ))}
        {isMobile ? <MainFooterMobile /> : <MainFooter />}
      </DisplayMainLayout>
    </>
  );
};

export default MainPage;
