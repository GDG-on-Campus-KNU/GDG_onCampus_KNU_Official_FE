import { useQuery } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export interface TrackInterface {
  TOTAL: number;
  FRONT_END: number;
  BACK_END: number;
  ANDROID: number;
  AI: number;
  DESIGNER: number;
  [key: string]: number;
}

const getTrackPath = () => '/api/admin/application/statistic/track';

const statisticQueryKey = [getTrackPath()];

const getTrack = async (classYearId: number): Promise<TrackInterface> => {
  const response = await fetchInstance.get<TrackInterface>(getTrackPath(), {
    params: {
      classYearId: classYearId,
    },
  });

  return response.data;
};

export const useGetTrack = (classYearId: number) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TrackInterface, Error>({
    queryKey: [statisticQueryKey],
    queryFn: () => getTrack(classYearId),
    enabled: !!accessToken,
  });
};
