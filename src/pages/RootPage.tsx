import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigationMobile from '@gdsc/components/common/header/MainNavigationMobile';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import MainNavigation from '../components/common/header/MainNavigation';
import styled from '@emotion/styled';

const MainContent = styled.main`
  padding-top: 45px;
  width: 100%;
  height: calc(100vh - 45px);
  ${displayCenter}
`;

const RootPage = () => {
  const navigation = useNavigation();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile ? <MainNavigationMobile /> : <MainNavigation />}
      <MainContent>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootPage;
