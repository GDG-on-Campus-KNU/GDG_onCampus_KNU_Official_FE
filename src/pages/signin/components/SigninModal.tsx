import { useMediaQuery } from 'react-responsive';

import SigninBtn from '@gdsc/components/common/button/SigninBtn';
import AuthModal from '@gdsc/components/feature/auth/AuthModal';

import {
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_REDIRECT_URI,
} from '@gdsc/constants/URI';

const SigninModal = () => {
  const GoogleLoginUrl = `
    https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email
  `;
  const google_login = () => {
    window.open(GoogleLoginUrl, '_self');
  };
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <>
      <AuthModal
        title='GDSC KNU Log In'
        {...(isMobile && {
          text: 'Google 계정을 이용하여\nGDSC KNU에 로그인하세요!',
        })}
      >
        <SigninBtn onClick={google_login} width='100%'>
          Google 계정으로 로그인
        </SigninBtn>
      </AuthModal>
    </>
  );
};

export default SigninModal;
