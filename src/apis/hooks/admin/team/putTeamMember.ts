import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const putTeamMemberPath = () => `/api/admin/team`;

export const putTeamMember = async ({
  oldTeamId,
  newTeamId,
  memberId,
}: {
  oldTeamId: number;
  newTeamId: number;
  memberId: number;
}): Promise<void> => {
  const response = await fetchInstance.put(putTeamMemberPath(), {
    oldTeamId,
    newTeamId,
    memberId,
  });

  return response.data;
};
