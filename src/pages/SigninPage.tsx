import SigninModal from '../components/common/SigninModal';

const SigninPage = () => {
  return (
    <>
      <SigninModal
        title='GDSC 로그인'
        text={`구글 계정을 이용하여\n
        GDSC KNU에 로그인하세요.`}
      />
    </>
  );
};

export default SigninPage;
