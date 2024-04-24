import SigninBtn from '../Button/SigninBtn';
import AuthModal from '../Common/AuthModal';

const SignupModal = () => {
  return (
    <>
      <AuthModal
        title='GDSC 계정 만들기'
        text={`Google 계정을 이용하여\n GDSC KNU 계정을 만들어보세요.`}
      >
        <SigninBtn width='80%'>Google 계정으로 가입 </SigninBtn>
      </AuthModal>
    </>
  );
};

export default SignupModal;
