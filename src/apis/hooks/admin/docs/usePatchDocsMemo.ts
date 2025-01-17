import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const patchMemoPath = () => '/api/admin/application/note';

const patchDocsMemo = async (
  id: number,
  memo: { note: string; version: number }
): Promise<void> => {
  await fetchInstance.patch(patchMemoPath(), memo, { params: { id } });
};

export const usePatchDocsMemo = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  const mutation = useMutation<
    void,
    Error,
    { id: number; memo: { note: string; version: number } }
  >({
    mutationFn: ({ id, memo }) => {
      if (!accessToken) {
        return Promise.reject(new Error('액세스 토큰이 없습니다.'));
      }
      return patchDocsMemo(id, memo);
    },
  });

  return mutation;
};
