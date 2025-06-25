import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const deleteLikeCountPath = (postId: number) => `/api/post/${postId}/like`;

export const deleteLikeCount = async (postId: number) => {
  const response = await fetchInstance.delete(deleteLikeCountPath(postId));
  return response.data;
};
