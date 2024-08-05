import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigation } from 'react-router-dom';

import AdminMainNavigation from '@gdsc/components/feature/header/AdminNavigation';
import AdminMainNavigationMobile from '@gdsc/components/feature/header/AdminNavigationMobile';

import { MainContent } from './RootPage';

const AdminRootPage = () => {
  const navigation = useNavigation();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile ? <AdminMainNavigationMobile /> : <AdminMainNavigation />}
      <MainContent>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </MainContent>
    </>
  );
};

export default AdminRootPage;