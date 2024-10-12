import { SigninGoogleAPI } from '@gdg/apis/hooks/signin/SigninGoogleAPI';
import { queryClient } from '@gdg/apis/instance/Http';
import { SigninAPIInterface } from '@gdg/types/OAuthInterface';
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
