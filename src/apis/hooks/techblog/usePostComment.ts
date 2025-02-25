import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { queryClient } from '@gdg/apis/instance/Http';
import { commentPostInterface } from '@gdg/types/UserInterface';

const postCommentPath = (postId: number) => `/api/post/${postId}/comment`;

const postComment = async (
  postId: number,
  data: commentPostInterface
): Promise<void> => {
  const response = await fetchInstance.post(postCommentPath(postId), data);

  return response.data;
};

export const usePostComment = (
  postId: number
): UseMutationResult<void, Error, commentPostInterface> => {
  return useMutation<void, Error, commentPostInterface>({
    mutationFn: (data) => postComment(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentPost'] });
      alert('댓글이 성공적으로 업로드되었습니다.');
    },
    onError: (error) => {
      console.error('댓글 업로드 중 오류가 발생했습니다:', error);
      alert('댓글 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.');
    },
  });
};
