import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface TeamMember {
  id: number;
  name: string;
  studentNumber: string;
  profileUrl: string;
}

interface GetTeamMemberParams {
  teamId?: number;
}

const getTeamMemberPath = (teamId: number) => `/api/admin/team/${teamId}`;

const getTeamMember = async (
  teamId: number,
  subTeamId?: number
): Promise<TeamMember[]> => {
  const params: GetTeamMemberParams = {};
  if (subTeamId !== undefined) {
    params.teamId = subTeamId;
  }

  const response = await fetchInstance.get<TeamMember[]>(
    getTeamMemberPath(teamId),
    {
      params,
    }
  );

  return response.data;
};

export const useGetTeamMember = (
  teamId: number,
  subTeamId?: number
): UseQueryResult<TeamMember[], Error> => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<TeamMember[], Error>({
    queryKey: [getTeamMemberPath(teamId), subTeamId],
    queryFn: () => getTeamMember(teamId, subTeamId),
    enabled: !!accessToken,
  });
};
