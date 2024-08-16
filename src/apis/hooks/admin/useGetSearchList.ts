import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { userListInterface } from './status/useGetUserList';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const getSearchListPath = () => '/api/admin/member/search';

const searchListQueryKey = [getSearchListPath()];

const getSearchList = async (
  searchName: string | undefined,
  page: number,
  size: number
): Promise<userListInterface> => {
  const response = await fetchInstance.get<userListInterface>(
    getSearchListPath(),
    {
      params: {
        name: searchName,
        page: page,
        size: size,
      },
    }
  );

  return response.data;
};

export const useGetSearchList = (
  searchName: string | undefined,
  page: number,
  size: number
): UseQueryResult<userListInterface, Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<userListInterface, Error>({
    queryKey: [searchListQueryKey, searchName, page, size],
    queryFn: () => getSearchList(searchName, page, size),
    enabled: !!accessToken,
  });
};
