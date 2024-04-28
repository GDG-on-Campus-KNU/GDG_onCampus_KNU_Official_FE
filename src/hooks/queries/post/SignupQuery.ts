import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@gdsc/hooks/queries/Http';

import { SignupAPI } from '@gdsc/apis/signup/SignupAPI';

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
