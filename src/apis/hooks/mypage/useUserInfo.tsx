import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

export interface IUserInfo {
  name: string;
  age: number;
  major: string;
  studentNumber: string;
  email: string;
  teamInfos: string[];
}

const getUserInfo = async (accessToken: string | null) => {
  const response = await axios.get('http://43.202.198.49:8080/api/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data as IUserInfo;
};

export const useUserInfo = (accessToken: string | null) => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(accessToken),
    enabled: !!accessToken,
  });
};
