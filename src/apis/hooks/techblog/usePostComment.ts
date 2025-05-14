import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import {
  commentPostInterface,
  commentDataInterface,
} from '@gdg/types/UserInterface';

const postCommentPath = (postId: number) => `/api/post/${postId}/comment`;

const postComment = async (
  postId: number,
  data: commentPostInterface
): Promise<commentDataInterface> => {
  const response = await fetchInstance.post(postCommentPath(postId), data);

  return response.data;
};

export const usePostComment = (
  postId: number
): UseMutationResult<commentDataInterface, Error, commentPostInterface> => {
  return useMutation({
    mutationFn: (data) => postComment(postId, data),
    onError: (error) => {
      console.error('댓글 업로드 중 오류: ', error);
      alert('댓글 업로드 실패');
    },
  });
};
