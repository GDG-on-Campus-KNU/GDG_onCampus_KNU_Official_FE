import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { commentInterface } from '@gdg/types/UserInterface';

const getCommentPath = (postId: number) => `/api/post/${postId}/comment`;

const getComment = async (
  postId: number,
  page: number,
  size: number
): Promise<commentInterface> => {
  const response = await fetchInstance.get(getCommentPath(postId), {
    params: { page, size },
  });
  return response.data;
};

export const useGetComment = (
  postId: number | null,
  page: number = 0,
  size: number = 5
): UseQueryResult<commentInterface, Error> => {
  return useQuery<commentInterface, Error>({
    queryKey: [getCommentPath(postId!), page, size],
    queryFn: () => {
      if (postId === null) {
        throw new Error('postId가 없습니다.');
      }
      return getComment(postId, page, size);
    },
    enabled: postId !== null,
  });
};
