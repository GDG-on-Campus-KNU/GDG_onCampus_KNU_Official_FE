import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useMutation } from '@tanstack/react-query';

const approveUserListPath = () => '/api/admin/member/role';

const approveUserList = async (
  selectedUser: number[],
  userRole: string
): Promise<void> => {
  await fetchInstance.patch(approveUserListPath(), {
    userIds: selectedUser,
    role: userRole,
  });
};

export const useApproveUserList = () => {
  const accessToken = localStorage.getItem('accessToken');

  const mutation = useMutation<
    void,
    Error,
    { selectedUser: number[]; userRole: string }
  >({
    mutationFn: ({ selectedUser, userRole }) => {
      if (!accessToken) {
        return Promise.reject(new Error('액세스 토큰이 없습니다.'));
      }
      return approveUserList(selectedUser, userRole);
    },
  });

  return mutation;
};
