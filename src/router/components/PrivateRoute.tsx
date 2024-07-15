import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@gdsc/provider/auth/index';

const PrivateRoute = () => {
  const { token } = useAuth();

  if (!token) {
    alert('로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.');

    return <Navigate to='/signin' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
