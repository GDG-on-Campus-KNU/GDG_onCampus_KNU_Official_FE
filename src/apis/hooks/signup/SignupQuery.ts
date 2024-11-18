import { useMutation } from '@tanstack/react-query';

import { SignupAPI } from '@gdg/apis/hooks/signup/SignupAPI';
import { queryClient } from '@gdg/apis/instance/Http';

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
