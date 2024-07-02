import { queryClient } from '@gdsc/hooks/queries/Http';

import { SigninGoogleAPI } from '@gdsc/apis/signin/SigninGoogleAPI';

import { SigninAPIInterface } from '@gdsc/interface/OAuthInterface';
import { useMutation } from '@tanstack/react-query';

export const SigninQuery = (onSuccess: (data: SigninAPIInterface) => void) => {
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: ({ code, provider }: { code: string; provider: string }) =>
      SigninGoogleAPI(code, provider),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['signInGoogle'] });
      onSuccess(data);
    },
  });

  return { mutate, data, isPending, isError, error };
};
