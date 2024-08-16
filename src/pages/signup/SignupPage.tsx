import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpForm from '@gdsc/pages/signup/components/SignUpForm';

import { useGetMyData } from '@gdsc/apis/hooks/mypage/useGetMyData';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

const SignupPage = () => {
  const { data: MyData } = useGetMyData();
  const navigate = useNavigate();

  useEffect(() => {
    if (MyData && MyData?.role !== 'ROLE_TEMP') {
      alert('추가 정보를 입력한 상태입니다. 메인페이지로 이동합니다.');
      navigate('/');
    }
  }, [MyData, navigate]);

  return (
    <AuthWrapper>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignupPage;
