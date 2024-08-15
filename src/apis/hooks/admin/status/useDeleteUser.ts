import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useMutation } from '@tanstack/react-query';

const deleteUserListPath = () => '/api/admin/member';

const deleteUserList = async (selectedUser: number[]): Promise<void> => {
  await fetchInstance.delete(deleteUserListPath(), {
    data: {
      userIds: selectedUser,
    },
  });
};

export const useDeleteUserList = () => {
  const accessToken = localStorage.getItem('accessToken');

  const mutation = useMutation<void, Error, number[]>({
    mutationFn: (selectedUser: number[]) => {
      if (!accessToken) {
        return Promise.reject(new Error('액세스 토큰이 없습니다.'));
      }
      return deleteUserList(selectedUser);
    },
  });

  return mutation;
};
