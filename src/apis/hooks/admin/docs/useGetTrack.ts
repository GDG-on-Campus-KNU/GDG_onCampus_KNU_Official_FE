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

  const total = Object.values(response.data).reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  const trackData: TrackInterface = { ...response.data, TOTAL: total };
  return trackData;
};

export const useGetTrack = () => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<TrackInterface, Error>({
    queryKey: [statisticQueryKey],
    queryFn: getTrack,
    enabled: !!accessToken,
  });
};
