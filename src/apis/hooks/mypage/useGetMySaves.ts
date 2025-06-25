import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { myTechBlogListInterface } from '@gdg/types/UserInterface';

const getMySavesPath = () => '/api/post/mypost';

export const getMySaves = async (
  status: 'TEMPORAL' | 'SAVED',
  page: number = 0,
  size: number = 8
): Promise<myTechBlogListInterface> => {
  const response = await fetchInstance.get(
    `${getMySavesPath()}?status=${status}&page=${page}&size=${size}`
  );
  return response.data;
};
