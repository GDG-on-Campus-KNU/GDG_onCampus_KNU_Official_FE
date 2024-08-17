import SigninModal from '@gdsc/pages/signin/components/SigninModal';

import { SEO } from '@gdsc/utils/Seo';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

const SigninPage = () => {
  return (
    <>
      <SEO
        title='GDSC KNU - 로그인 페이지'
        description='로그인 후 서비스를 이용해보세요.'
        url='https://gdsc-knu.com/signin'
        image='https://gdsc-knu.com/Login.png'
      />
      <AuthWrapper>
        <SigninModal />
      </AuthWrapper>
    </>
  );
};

export default SigninPage;
