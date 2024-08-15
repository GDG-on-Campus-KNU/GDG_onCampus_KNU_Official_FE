import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useMutation } from '@tanstack/react-query';

const patchDocsMemoPath = () => `/api/admin/application/note`;

export const patchDocsMemo = async (id: number, memo: string) => {
  await fetchInstance.patch(patchDocsMemoPath(), {
    params: {
      id: id,
    },
    memo,
  });
};

export const usePatchDocsMemo = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useMutation<void, Error, { id: number; memo: string }>({
    mutationFn: ({ id, memo }) => {
      if (!accessToken) {
        throw new Error('No access token');
      }
      return patchDocsMemo(id, memo);
    },
  });
};
