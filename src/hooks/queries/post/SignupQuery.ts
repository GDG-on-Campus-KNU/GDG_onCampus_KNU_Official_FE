import { useNavigate } from 'react-router-dom';

import { queryClient } from '@gdsc/hooks/queries/Http';

import { SignupAPI } from '@gdsc/apis/signup/SignupAPI';

import { useMutation } from '@tanstack/react-query';

export const SignupQuery = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: SignupAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['signUp'] });
      navigate('/');
    },
  });

  return { mutate, isPending, isError, error };
};
