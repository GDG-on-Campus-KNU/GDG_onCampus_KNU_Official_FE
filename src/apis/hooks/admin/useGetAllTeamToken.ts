import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface SubTeam {
  id: number;
  teamName: string;
  teamPageUrl: string;
}

export interface Team {
  id: number;
  teamName: string;
  teamPageUrl: string;
  subTeams: SubTeam[];
}

const getAllTeamTokentPath = () => '/api/admin/team';

const allTeamTokenQueryKey = [getAllTeamTokentPath()];

const getAllTeamToken = async (): Promise<Team> => {
  const response = await fetchInstance.get<Team>(getAllTeamTokentPath());

  return response.data;
};

export const useGetAllTeamToken = (): UseQueryResult<Team, Error> => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<Team, Error>({
    queryKey: allTeamTokenQueryKey,
    queryFn: getAllTeamToken,
    enabled: !!accessToken,
  });
};
