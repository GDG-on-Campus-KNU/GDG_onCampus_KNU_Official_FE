import { lazy } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { displayCenter } from '@gdg/styles/LayoutStyle';

import styled from '@emotion/styled';

const MainNavigation = lazy(
  () => import('@gdg/components/feature/header/MainNavigation')
);
const MainNavigationMobile = lazy(
  () => import('@gdg/components/feature/header/MainNavigationMobile')
);

export const MainContent = styled.main`
  padding-top: 45px;
  width: 100%;
  height: calc(auto - 45px);
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-top: 75px;
  }
`;

const RootPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile ? <MainNavigationMobile /> : <MainNavigation />}
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootPage;
