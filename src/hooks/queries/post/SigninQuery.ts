import { queryClient } from '@gdsc/hooks/queries/Http';

import { SigninGoogleAPI } from '@gdsc/apis/signin/SigninGoogleAPI';

import { useMutation } from '@tanstack/react-query';

export const SigninQuery = () => {
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: SigninGoogleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signInGoogle'] });
    },
  });

  return { mutate, data, isPending, isError, error };
};
