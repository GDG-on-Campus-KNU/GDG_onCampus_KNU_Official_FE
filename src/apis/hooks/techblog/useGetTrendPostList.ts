import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { blogPostMetaDataInterface } from '@gdg/types/UserInterface';

const getTrendPostListPath = () => '/api/post/trending';

export const getTrendPostList = async (
  category: string,
  size: number
): Promise<blogPostMetaDataInterface[]> => {
  const response = await fetchInstance.get(
    `${getTrendPostListPath()}?category=${category}&size=${size}`
  );
  return response.data;
};
