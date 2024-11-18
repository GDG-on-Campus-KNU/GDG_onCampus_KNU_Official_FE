import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import type { TeamData } from '@gdg/types/TeamData.type';

const getTeamMatePath = (teamId: number) => `/api/team/${teamId}/member`;

const getTeamMate = async (teamId: number) => {
  const response = await fetchInstance.get(getTeamMatePath(teamId));
  return response.data;
};

export const useGetTeamMate = (
  teamId: number
): UseQueryResult<TeamData[], Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TeamData[], Error>({
    queryKey: [getTeamMatePath(teamId)],
    queryFn: () => getTeamMate(teamId),
    enabled: !!accessToken && teamId !== 0,
  });
};
