import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { queryClient } from '@gdg/apis/instance/Http';
import { blogPostInterface } from '@gdg/types/UserInterface';

const postBlogPath = () => '/api/post';

const postBlog = async (data: blogPostInterface): Promise<void> => {
  const response = await fetchInstance.post(postBlogPath(), data);

  return response.data;
};

export const usePostBlog = (): UseMutationResult<
  void,
  Error,
  blogPostInterface
> => {
  return useMutation<void, Error, blogPostInterface>({
    mutationFn: postBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPost'] });
      alert('게시글이 성공적으로 저장되었습니다.');
    },
    onError: (error) => {
      console.error('게시글 저장 중 오류가 발생했습니다:', error);
      alert('게시글 저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
    },
  });
};
