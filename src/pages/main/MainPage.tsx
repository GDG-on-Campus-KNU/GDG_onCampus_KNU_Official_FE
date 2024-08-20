import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';

import Content from '@gdsc/pages/main/components/Content';
import MainRound from '@gdsc/pages/main/components/MainRound';
import Star from '@gdsc/pages/main/components/Star';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const MainFooterMobile = lazy(
  () => import('@gdsc/components/feature/footer/MainFooterMobile')
);
const MainFooter = lazy(
  () => import('@gdsc/components/feature/footer/MainFooter')
);

const DisplayMainLayout = styled(DisplayLayout)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      <Helmet>
        <title>GDSC KNU - 메인 페이지</title>
        <meta name='description' content='GDSC 경북대의 메인 페이지입니다.' />
        <meta property='og:title' content='GDSC KNU - 메인 페이지' />
        <meta
          property='og:description'
          content='GDSC 경북대의 메인 페이지입니다.'
        />
        <meta
          property='og:image'
          content='https://gdsc-knu.com/WhiteLogo.png'
        />
        <meta property='og:url' content='https://gdsc-knu.com' />
      </Helmet>
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
