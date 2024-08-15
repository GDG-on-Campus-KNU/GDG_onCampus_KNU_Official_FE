import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useMutation } from '@tanstack/react-query';

const patchStatusPath = () => '/api/admin/application/status';

export const patchStatus = async (id: number, status: string) => {
  await fetchInstance.patch(patchStatusPath(), {
    params: {
      id: id,
      status: status,
    },
  });
};

export const usePatchStatus = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useMutation<void, Error, { id: number; status: string }>({
    mutationFn: ({ id, status }) => {
      if (!accessToken) {
        throw new Error('No access token');
      }
      return patchStatus(id, status);
    },
  });
};
