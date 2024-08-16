import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface TeamMember {
  id: number;
  name: string;
  studentNumber: string;
  profileUrl: string;
}

const getTeamMemberPath = (teamId: number) => `/api/admin/team/${teamId}`;

const getTeamMember = async (teamId: number): Promise<TeamMember[]> => {
  const response = await fetchInstance.get<TeamMember[]>(
    getTeamMemberPath(teamId)
  );

  return response.data;
};

export const useGetTeamMember = (
  teamId: number
): UseQueryResult<TeamMember[], Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TeamMember[], Error>({
    queryKey: [getTeamMemberPath(teamId)],
    queryFn: () => getTeamMember(teamId),
    enabled: !!accessToken,
  });
};
