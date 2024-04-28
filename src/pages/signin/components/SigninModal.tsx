import SigninBtn from '@gdsc/components/Button/SigninBtn';
import AuthModal from '@gdsc/components/auth/AuthModal';
import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_REDIRECT_URI } from '@gdsc/constants/URI';

const SigninModal = () => {

  const GoogleLoginUrl = `
    https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?
    response_type=code&client_id=${GOOGLE_AUTH_CLIENT_ID}&
    redirect_uri=${GOOGLE_AUTH_REDIRECT_URI}&scope=openid email profile
  `;
  const google_login = () => {
    window.open(GoogleLoginUrl, '_self');
  };

  return (
    <>
      <AuthModal
        title='GDSC 로그인'
        text={`Google 계정을 이용하여\n GDSC KNU에 로그인하세요.`}
      >
        <SigninBtn onClick={google_login} width='80%'>Google 계정으로 로그인</SigninBtn>
      </AuthModal>
    </>
  );
};

export default SigninModal;
