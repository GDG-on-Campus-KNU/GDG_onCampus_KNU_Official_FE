import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { useQuery } from '@tanstack/react-query';

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

const getTrack = async (): Promise<TrackInterface> => {
  const response = await fetchInstance.get<TrackInterface>(getTrackPath());

  return response.data;
};

export const useGetTrack = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TrackInterface, Error>({
    queryKey: [statisticQueryKey],
    queryFn: getTrack,
    enabled: !!accessToken,
  });
};
