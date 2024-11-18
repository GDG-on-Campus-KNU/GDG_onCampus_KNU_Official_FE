import { useMutation } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const patchStatusPath = () => '/api/admin/application/status';

export const patchStatus = async (id: number, status: string) => {
  await fetchInstance.patch(patchStatusPath(), null, {
    params: {
      id: id,
      status: status,
    },
  });
};

export const usePatchStatus = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useMutation<void, Error, { id: number; status: string }>({
    mutationFn: ({ id, status }) => {
      if (!accessToken) {
        throw new Error('No access token');
      }
      return patchStatus(id, status);
    },
  });
};
