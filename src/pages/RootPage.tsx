import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/common/MainNavigation';
import styled from '@emotion/styled';

const MainContent = styled.main`
  padding-top: 45px;
`;

const RootPage = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <MainContent>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootPage;
