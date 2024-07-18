import { SignupAPI } from '@gdsc/apis/hooks/signup/SignupAPI';
import { queryClient } from '@gdsc/apis/instance/Http';

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
