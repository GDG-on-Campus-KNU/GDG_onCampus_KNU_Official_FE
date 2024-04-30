import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@gdsc/hooks/queries/Http';

import { SigninGoogleAPI } from '@gdsc/apis/signin/SigninGoogleAPI';

export const SigninQuery = () => {

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: SigninGoogleAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signInGoogle'] });
    },
  });

  return { mutate, isPending, isError, error };
};
