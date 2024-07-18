import { instanceJWT } from '@gdsc/apis/instance/Api_JWT';

import { useQuery } from '@tanstack/react-query';

const getMyDataPath = () => '/api/user';

const myDataQueryKey = [getMyDataPath()];

export const getMyData = async () => {
  const response = await instanceJWT.get(getMyDataPath());

  return response.data;
};

export const useGetMyData = () =>
  useQuery({
    queryKey: myDataQueryKey,
    queryFn: getMyData,
  });
