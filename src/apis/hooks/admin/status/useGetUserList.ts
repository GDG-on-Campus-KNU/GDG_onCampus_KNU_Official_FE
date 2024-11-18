import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export type PersonData = {
  id: number;
  track: string | null;
  name: string;
  studentNumber: string;
  email: string;
  phoneNumber: string;
  teams: {
    teamName: string;
    TeamPageUrl: string;
  }[];
  role: string;
};

export interface userListInterface {
  data: PersonData[];
  page: number;
  hasNext: boolean;
  totalPage: number;
}

const getUserListPath = () => '/api/admin/member';

const userListQueryKey = [getUserListPath()];

const getUserList = async (
  page: number,
  size: number
): Promise<userListInterface> => {
  const response = await fetchInstance.get<userListInterface>(
    getUserListPath(),
    {
      params: {
        page: page,
        size: size,
      },
    }
  );

  return response.data;
};

export const useGetUserList = (
  page: number,
  size: number
): UseQueryResult<userListInterface, Error> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<userListInterface, Error>({
    queryKey: [userListQueryKey, page, size],
    queryFn: () => getUserList(page, size),
    enabled: !!accessToken,
  });
};
