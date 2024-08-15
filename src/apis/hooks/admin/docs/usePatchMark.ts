import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useMutation } from '@tanstack/react-query';

const patchMarkPath = () => '/api/admin/application/mark';

export const patchMark = async (id: number) => {
  const response = await fetchInstance.patch(patchMarkPath(), {
    params: {
      id: id,
    },
  });
  return response.data;
};

export const usePatchMark = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useMutation<void, Error, number>({
    mutationFn: (id) => {
      if (!accessToken) {
        throw new Error('No access token');
      }
      return patchMark(id);
    },
  });
};
