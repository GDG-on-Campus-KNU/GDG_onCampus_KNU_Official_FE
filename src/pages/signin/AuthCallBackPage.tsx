import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SigninQuery } from '@gdsc/hooks/queries/post/SigninQuery';

import { useTokenStore } from '@gdsc/store/useTokenStore';

const AuthCallBackPage = () => {
  const navigate = useNavigate();
  const { setAccessToken, accessToken } = useTokenStore();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  // console.log(code);

  const { mutate, data, isPending, isError, error } = SigninQuery();

  useEffect(() => {
    if (code) {
      mutate(code);
    }

    if (data && data.accessToken) {
      setAccessToken(data.accessToken);
      console.log(accessToken);
    }

    // if (data && data.newMember === true) {
    //   navigate('/gdscknu/signup');
    // } else if (data && data.newMember === false) {
    //   navigate('/gdscknu');
    // }
  }, [code, mutate, data, navigate, setAccessToken]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {isError && error && <div>{error.message}</div>}
      {!isPending && !isError && <div>Complete!</div>}
    </div>
  );
};

export default AuthCallBackPage;
