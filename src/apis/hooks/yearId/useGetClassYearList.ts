import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export type classYearList = {
  id: number;
  name: string;
  applyStartDateTime: string;
  applyEndDateTime: string;
};

const getClassYearListPath = () => '/api/admin/class-year';

const teamListQueryKey = [getClassYearListPath()];

const getClassYearList = async () => {
  const response = await fetchInstance.get(getClassYearListPath());
  return response.data;
};

export const useGetClassYearList = (): UseQueryResult<
  classYearList[],
  Error
> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<classYearList[], Error>({
    queryKey: teamListQueryKey,
    queryFn: getClassYearList,
    enabled: !!accessToken,
  });
};
