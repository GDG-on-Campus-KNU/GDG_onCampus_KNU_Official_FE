import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { MemberData } from '@gdsc/types/AdminInterface';
import { useQuery } from '@tanstack/react-query';

export interface SearchInterface {
  data: MemberData[];
  page: number;
  hasNext: boolean;
  totalPage: number;
}

const getSearchPath = () => '/api/admin/application/search';

const searchQueryKey = [getSearchPath()];

export const getSearch = async (
  name: string,
  page: number,
  size: number
): Promise<SearchInterface> => {
  const response = await fetchInstance.get<SearchInterface>(getSearchPath(), {
    params: {
      name: name,
      page: page,
      size: size,
    },
  });
  return response.data;
};

export const useGetSearch = (name: string, page: number, size: number) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<SearchInterface, Error>({
    queryKey: [searchQueryKey, name, page, size],
    queryFn: () => getSearch(name, page, size),
    enabled: !!accessToken,
  });
};
