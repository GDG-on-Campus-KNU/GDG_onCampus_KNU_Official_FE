import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { userDataInterface } from '@gdsc/types/UserInterface';
import { useQuery } from '@tanstack/react-query';

const getMyDataPath = () => '/api/user';

const myDataQueryKey = [getMyDataPath()];

export const getMyData = async (): Promise<userDataInterface> => {
  const response = await fetchInstance.get<userDataInterface>(getMyDataPath());

  return response.data;
};

export const useGetMyData = () =>
  useQuery<userDataInterface>({
    queryKey: myDataQueryKey,
    queryFn: getMyData,
  });
