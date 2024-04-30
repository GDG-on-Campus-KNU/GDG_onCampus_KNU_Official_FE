import { useEffect } from 'react';

import { SigninQuery } from '@gdsc/hooks/queries/post/SigninQuery';

const AuthCallBackPage = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  // console.log(code);

  const { mutate, isPending, isError, error } = SigninQuery();

  useEffect(() => {
    if (code) {
      mutate(code);
      console.log(code);
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
