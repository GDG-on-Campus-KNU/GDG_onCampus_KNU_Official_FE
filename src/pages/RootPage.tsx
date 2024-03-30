import { Outlet, useNavigation } from 'react-router-dom';

const RootPage = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* 네비게이션바 들어갈 위치 */}
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
