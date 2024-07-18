import { useNavigate } from 'react-router-dom';

import { ApplyAPI } from '@gdsc/apis/hooks/apply/ApplyAPI';
import { queryClient } from '@gdsc/apis/instance/Http';

import { ApplyFormInterface } from '@gdsc/types/ApplyInterface';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

export const useApplyFormMutation = (
  options?: Omit<
    UseMutationOptions<void, Error, ApplyFormInterface>,
    'mutationFn'
  >
) => {
  const navigate = useNavigate();

  return useMutation<void, Error, ApplyFormInterface>({
    mutationFn: (formData: ApplyFormInterface) => ApplyAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ApplyForm'] });
      alert('지원서가 성공적으로 제출되었습니다.');
      navigate('/apply');
    },
    onError: (error) => {
      console.error('지원서 제출 중 오류가 발생했습니다:', error);
      alert('지원서 제출 중 오류가 발생했습니다.');
    },
    ...options,
  });
};
