import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { userListInterface } from './useGetUserList';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const getSearchListPath = () => '/api/admin/member/search';

const searchListQueryKey = [getSearchListPath()];

const getSearchList = async (
  searchName: string
): Promise<userListInterface> => {
  const response = await fetchInstance.get<userListInterface>(
    getSearchListPath(),
    {
      params: {
        name: searchName,
      },
    }
  );

  return response.data;
};

export const useGetSearchList = (
  searchName: string
): UseQueryResult<userListInterface, Error> => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<userListInterface, Error>({
    queryKey: [searchListQueryKey, searchName],
    queryFn: () => getSearchList(searchName),
    enabled: !!accessToken,
  });
};
