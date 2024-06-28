import SignUpForm from '@gdsc/pages/signup/components/SignUpForm';

import { AuthWrapper } from '@gdsc/styles/AuthModalStyle';

const SignupPage = () => {
  return (
    <AuthWrapper>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignupPage;
