import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

const postSubTeamPath = (teamId: number) => `/api/admin/team/${teamId}/subTeam`;

export const postSubTeam = async ({
  teamId,
  subTeamId,
}: {
  teamId: number;
  subTeamId?: number;
}): Promise<void> => {
  const response = await fetchInstance.post(postSubTeamPath(teamId), {
    params: {
      teamId: subTeamId,
    },
  });

  return response.data;
};
