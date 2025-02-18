import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { blogPostDetailInterface } from '@gdg/types/UserInterface';

const getPostDetailPath = (postId: number) => `/api/post/${postId}`;

const getPostDetail = async (
  postId: number
): Promise<blogPostDetailInterface> => {
  const response = await fetchInstance.get(getPostDetailPath(postId));
  return response.data;
};

export const useGetPostDetail = (
  postId: number | null
): UseQueryResult<blogPostDetailInterface, Error> => {
  return useQuery<blogPostDetailInterface, Error>({
    queryKey: [getPostDetailPath(postId!)],
    queryFn: () => {
      if (postId === null) {
        throw new Error('postId가 없습니다.');
      }
      return getPostDetail(postId);
    },
    enabled: postId !== null,
  });
};
