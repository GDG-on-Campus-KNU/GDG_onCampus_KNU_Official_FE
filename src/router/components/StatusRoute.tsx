import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
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
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [setUser]);

  useEffect(() => {
    if (data) {
      const userStatus = data.role.replace('ROLE_', '') as
        | 'TEMP'
        | 'GUEST'
        | 'MEMBER'
        | 'CORE';
      const userData = { name: data.name, status: userStatus };
      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
    } else if (error) {
      setUser(null);
      sessionStorage.removeItem('user');
    }
  }, [data, error, setUser]);

  if (isLoading) {
    return (
      <Oval
        visible={true}
        height='30'
        width='30'
        color='#fff'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
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
