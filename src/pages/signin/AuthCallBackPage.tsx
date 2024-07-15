import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SigninQuery } from '@gdsc/hooks/queries/post/SigninQuery';

import { SigninAPIInterface } from '@gdsc/types/OAuthInterface';

const AuthCallBackPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleSuccess = (data: SigninAPIInterface) => {
    localStorage.setItem('accessToken', data.accessToken);
    if (data.newMember === true) {
      navigate('/signup');
    } else {
      window.location.href = '/';
    }
  };

  const { mutate, isPending, isError, error } = SigninQuery(handleSuccess);

  useEffect(() => {
    if (code) {
      mutate({ code, provider: 'GOOGLE' });
    }
  }, [code, mutate]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {isError && error && <div>{error.message}</div>}
      {!isPending && !isError && <div>Complete!</div>}
    </div>
  );
};

export default AuthCallBackPage;
