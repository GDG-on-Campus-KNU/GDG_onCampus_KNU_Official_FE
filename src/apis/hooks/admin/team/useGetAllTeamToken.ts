import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export interface SubTeam {
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

const getAllTeamTokenPath = () => '/api/admin/team';

export const allTeamTokenQueryKey = [getAllTeamTokenPath()];

const getAllTeamToken = async (): Promise<Team> => {
  const response = await fetchInstance.get<Team>(getAllTeamTokenPath());

  return response.data;
};

export const useGetAllTeamToken = (): UseQueryResult<Team, Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<Team, Error>({
    queryKey: allTeamTokenQueryKey,
    queryFn: getAllTeamToken,
    enabled: !!accessToken,
  });
};
