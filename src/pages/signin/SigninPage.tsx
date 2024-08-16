import SigninModal from '@gdsc/pages/signin/components/SigninModal';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

const SigninPage = () => {
  return (
    <AuthWrapper>
      <SigninModal />
    </AuthWrapper>
  );
};

export default SigninPage;
