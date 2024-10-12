import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const postSubTeamPath = (teamId: number) => `/api/admin/team/${teamId}/subTeam`;

export const postSubTeam = async ({
  teamId,
}: {
  teamId: number;
}): Promise<void> => {
  const response = await fetchInstance.post(postSubTeamPath(teamId));

  return response.data;
};
