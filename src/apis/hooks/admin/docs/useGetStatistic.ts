import { useQuery } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export interface statisticInterface {
  total: number;
  openCount: number;
  notOpenCount: number;
  approvedCount: number;
  rejectedCount: number;
}

const getStatisticPath = () => '/api/admin/application/statistic';

const statisticQueryKey = [getStatisticPath()];

export const getStatistic = async (
  classYearId: number
): Promise<statisticInterface> => {
  const response = await fetchInstance.get<statisticInterface>(
    getStatisticPath(),
    {
      params: {
        classYearId: classYearId,
      },
    }
  );

  return response.data;
};

export const useGetStatistic = (classYearId: number) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<statisticInterface, Error>({
    queryKey: [statisticQueryKey],
    queryFn: () => getStatistic(classYearId),
    enabled: !!accessToken,
  });
};
