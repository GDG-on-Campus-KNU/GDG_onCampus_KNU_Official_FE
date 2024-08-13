import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, Outlet } from 'react-router-dom';

import { useGetMyData } from '@gdsc/apis/hooks/mypage/useGetMyData';

import useUserStatusStore from '@gdsc/store/useUserStatusStore';

interface PrivateRouteProps {
  allowedStatuses: ('TEMP' | 'CORE' | 'MEMBER' | 'GUEST')[];
}

const StatusRoute = ({ allowedStatuses }: PrivateRouteProps) => {
  const user = useUserStatusStore((state) => state.user);
  const setUser = useUserStatusStore((state) => state.setUser);
  const { data, error, isLoading } = useGetMyData();

  useEffect(() => {
    if (data) {
      const userStatus = data.role.replace('ROLE_', '') as
        | 'TEMP'
        | 'GUEST'
        | 'MEMBER'
        | 'CORE';
      setUser({ name: data.name, status: userStatus });
    } else if (error) {
      setUser(null);
    }
  }, [data, error, setUser]);

  if (isLoading) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  }

  if (error || user === null) {
    return <Navigate to='/signin' />;
  }

  if (typeof user === 'string' && user === 'TEMP') {
    return <Navigate to='/signup' />;
  }

  if (typeof user === 'object') {
    if (user.status === 'GUEST') {
      const adminOrTeamRoute = /^\/(admin|team)/.test(location.pathname);
      if (adminOrTeamRoute) {
        alert('접근할 수 없는 페이지입니다.');
        return <Navigate to='/error' />;
      }
    }

    if (user.status === 'MEMBER') {
      if (/^\/admin/.test(location.pathname)) {
        alert('접근할 수 없는 페이지입니다.');
        return <Navigate to='/error' />;
      }
    }

    // 코어 일 경우

    if (user && allowedStatuses.includes(user.status)) {
      return <Outlet />;
    }
  }

  return <Navigate to='/error' />;
};

export default StatusRoute;
