import SigninBtn from '@gdsc/components/Button/SigninBtn';
import AuthModal from '@gdsc/components/auth/AuthModal';

const SigninModal = () => {
  return (
    <>
      <AuthModal
        title='GDSC 로그인'
        text={`Google 계정을 이용하여\n GDSC KNU에 로그인하세요.`}
      >
        <SigninBtn width='80%'>Google 계정으로 로그인</SigninBtn>
      </AuthModal>
    </>
  );
};

export default SigninModal;
