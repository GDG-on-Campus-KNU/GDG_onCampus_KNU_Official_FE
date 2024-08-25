import { lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import Content from '@gdsc/pages/main/components/Content';
import MainRound from '@gdsc/pages/main/components/MainRound';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';
import { MainMetaData } from '@gdsc/router/components/MetaData';

const MainFooterMobile = lazy(
  () => import('@gdsc/components/feature/footer/MainFooterMobile')
);
const MainFooter = lazy(
  () => import('@gdsc/components/feature/footer/MainFooter')
);

const Star = lazy(() => import('@gdsc/pages/main/components/Star'));

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
