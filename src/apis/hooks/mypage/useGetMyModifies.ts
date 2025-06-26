import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { blogPostDetailInterface } from '@gdg/types/UserInterface';

const getMyModifiesPath = (postId: number) => `/api/post/${postId}/modify`;

const getMyModifies = async (
  postId: number
): Promise<blogPostDetailInterface> => {
  const response = await fetchInstance.get(getMyModifiesPath(postId));
  return response.data;
};

export const useGetMyModifies = (
  postId: number | null
): UseQueryResult<blogPostDetailInterface, Error> => {
  return useQuery<blogPostDetailInterface, Error>({
    queryKey: [getMyModifiesPath(postId!)],
    queryFn: () => {
      if (postId === null) {
        throw new Error('postId가 없습니다.');
      }
      return getMyModifies(postId);
    },
    enabled: postId !== null,
  });
};
