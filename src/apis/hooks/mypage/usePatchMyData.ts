import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { queryClient } from '@gdg/apis/instance/Http';
import {
  patchUserStatusInterface,
  patchUserStatusRequest,
} from '@gdg/types/UserInterface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

const patchMyDataPath = () => '/api/user';

export const patchMyData = async (
  data: patchUserStatusRequest
): Promise<patchUserStatusInterface> => {
  const response = await fetchInstance.patch<patchUserStatusInterface>(
    patchMyDataPath(),
    data
  );

  return response.data;
};

export const usePatchMyData = (): UseMutationResult<
  patchUserStatusInterface,
  Error,
  patchUserStatusRequest
> => {
  return useMutation<patchUserStatusInterface, Error, patchUserStatusRequest>({
    mutationFn: patchMyData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
      alert('정보가 성공적으로 저장되었습니다.');
      window.location.reload();
    },
    onError: (error) => {
      console.error('정보 저장 중 오류가 발생했습니다:', error);
      alert('정보 저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
    },
  });
};
