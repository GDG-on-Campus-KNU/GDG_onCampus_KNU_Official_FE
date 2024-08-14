import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigationMobile from '@gdsc/components/feature/header/MainNavigationMobile';
import AdminMainNavigation from '@gdsc/components/feature/header/admin/AdminNavigation';
import AdminTitle from '@gdsc/components/feature/header/admin/AdminTitle';

import Star from '@gdsc/pages/main/components/Star';

// import AdminMainNavigationMobile from '@gdsc/components/feature/header/admin/AdminNavigationMobile';
import { MainContent } from './RootPage';

const AdminRootPage = () => {
  const navigation = useNavigation();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      {isMobile ? <MainNavigationMobile /> : <AdminMainNavigation />}
      <AdminTitle />
      {isMobile ? null : (
        <MainContent>
          {[...Array(10)].map((_, index) => (
            <Star
              key={index}
              top={`${Math.random() * 20}%`}
              left={`${Math.random() * 100}%`}
            />
          ))}
          {navigation.state === 'loading' && <p>Loading...</p>}
          <Outlet />
        </MainContent>
      )}
    </>
  );
};

export default AdminRootPage;
