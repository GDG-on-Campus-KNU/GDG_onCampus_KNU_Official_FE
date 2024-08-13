import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { userDataInterface } from '@gdsc/types/UserInterface';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const getMyDataPath = () => '/api/user';

const myDataQueryKey = [getMyDataPath()];

const getMyData = async (): Promise<userDataInterface> => {
  const response = await fetchInstance.get<userDataInterface>(getMyDataPath());

  return response.data;
};

export const useGetMyData = (): UseQueryResult<userDataInterface, Error> => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<userDataInterface, Error>({
    queryKey: myDataQueryKey,
    queryFn: getMyData,
    enabled: !!accessToken,
  });
};
