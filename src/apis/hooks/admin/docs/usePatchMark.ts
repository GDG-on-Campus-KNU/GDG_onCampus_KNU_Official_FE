import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { useMutation } from '@tanstack/react-query';

const patchMarkPath = () => '/api/admin/application/mark';

const patchMark = async (userId: number) => {
  await fetchInstance.patch(patchMarkPath(), null, {
    params: {
      id: userId,
    },
  });
};

export const usePatchMark = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  const mutation = useMutation<void, Error, number>({
    mutationFn: (id: number) => {
      if (!accessToken) {
        return Promise.reject(new Error('액세스 토큰이 없습니다.'));
      }
      return patchMark(id);
    },
  });

  return mutation;
};
