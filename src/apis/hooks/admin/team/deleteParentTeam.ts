import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

const deleteParentTeamPath = (parentTeamId: number) =>
  `/api/admin/team/${parentTeamId}`;

export const deleteParentTeam = async ({
  parentTeamId,
}: {
  parentTeamId: number;
}): Promise<void> => {
  const response = await fetchInstance.delete(
    deleteParentTeamPath(parentTeamId)
  );

  return response.data;
};
