import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { userDataInterface } from '@gdg/types/UserInterface';

const getMyDataPath = () => '/api/user';

const myDataQueryKey = [getMyDataPath()];

const getMyData = async (): Promise<userDataInterface> => {
  const response = await fetchInstance.get<userDataInterface>(getMyDataPath());

  return response.data;
};

export const useGetMyData = (): UseQueryResult<userDataInterface, Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<userDataInterface, Error>({
    queryKey: myDataQueryKey,
    queryFn: getMyData,
    enabled: !!accessToken,
  });
};
