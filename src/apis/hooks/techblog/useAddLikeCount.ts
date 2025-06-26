import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const addLikeCountPath = (postId: number) => `/api/post/${postId}/like`;

export const addLikeCount = async (postId: number) => {
  const response = await fetchInstance.post(addLikeCountPath(postId));
  return response.data;
};
