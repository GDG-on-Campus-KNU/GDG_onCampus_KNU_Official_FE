import MainNavigationMobile from '@gdg/components/feature/header/MainNavigationMobile';
import AdminMainNavigation from '@gdg/components/feature/header/admin/AdminNavigation';
import AdminTitle from '@gdg/components/feature/header/admin/AdminTitle';
import Star from '@gdg/components/feature/star/Star';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

// import AdminMainNavigationMobile from '@gdg/components/feature/header/admin/AdminNavigationMobile';
import { MainContent } from './RootPage';

const AdminRootPage = () => {
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

          <Outlet />
        </MainContent>
      )}
    </>
  );
};

export default AdminRootPage;
