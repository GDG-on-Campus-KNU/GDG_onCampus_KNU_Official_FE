import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

export type TeamList = {
  id: number;
  teamName: string;
};

const getTeamListPath = () => '/api/team';

const teamListQueryKey = [getTeamListPath()];

const getTeamList = async () => {
  const response = await fetchInstance.get(getTeamListPath());
  return response.data;
};

export const useGetTeamList = (): UseQueryResult<TeamList[], Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TeamList[], Error>({
    queryKey: teamListQueryKey,
    queryFn: getTeamList,
    enabled: !!accessToken,
  });
};
