import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

const deleteSubTeamPath = (parentTeamId: number) =>
  `/api/admin/team/${parentTeamId}/subTeam`;

export const deleteSubTeam = async ({
  parentTeamId,
}: {
  parentTeamId: number;
}): Promise<void> => {
  const response = await fetchInstance.delete(deleteSubTeamPath(parentTeamId));

  return response.data;
};
