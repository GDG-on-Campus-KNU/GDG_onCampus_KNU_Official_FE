import { queryClient } from '@gdsc/hooks/queries/Http';

import { SignupAPI } from '@gdsc/apis/signup/SignupAPI';

import { useMutation } from '@tanstack/react-query';

export const SignupQuery = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: SignupAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signUp'] });
      window.location.href = '/';
    },
  });

  return { mutate, isPending, isError, error };
};
