import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery } from '@tanstack/react-query';

const deleteUserListPath = () => '/api/admin/member';

const userListQueryKey = [deleteUserListPath()];

export const deleteUserList = async (selectedUser: number[]) => {
  await fetchInstance.delete(deleteUserListPath(), {
    params: {
      userIds: selectedUser,
    },
  });
};

export const useDeleteUserList = (selectedUser: number[]) => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery({
    queryKey: [userListQueryKey, selectedUser],
    queryFn: () => deleteUserList(selectedUser),
    enabled: !!accessToken,
  });
};
