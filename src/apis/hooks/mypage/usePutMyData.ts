import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { queryClient } from '@gdg/apis/instance/Http';
import { putUserDataInterface } from '@gdg/types/UserInterface';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

const getMyDataPath = () => '/api/user';

export const putMyData = async (
  data: Partial<putUserDataInterface>
): Promise<putUserDataInterface> => {
  const response = await fetchInstance.put<putUserDataInterface>(
    getMyDataPath(),
    data
  );

  return response.data;
};

export const usePutMyData = (): UseMutationResult<
  putUserDataInterface,
  Error,
  Partial<putUserDataInterface>
> => {
  return useMutation<
    putUserDataInterface,
    Error,
    Partial<putUserDataInterface>
  >({
    mutationFn: putMyData,
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
