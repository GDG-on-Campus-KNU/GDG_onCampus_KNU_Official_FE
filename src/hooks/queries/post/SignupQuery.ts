import { useNavigate } from 'react-router-dom';

import { queryClient } from '../../queries/Http';
import { useMutation } from '@tanstack/react-query';

import { SignupAPI } from '../../../apis/signup/SignupAPI';

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
