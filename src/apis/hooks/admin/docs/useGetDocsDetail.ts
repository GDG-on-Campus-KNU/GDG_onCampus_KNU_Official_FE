import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { useQuery } from '@tanstack/react-query';

export type AnswerData = {
  questionNumber: number;
  answer: string;
};

export interface DocsDetailInterface {
  id: number;
  name: string;
  studentNumber: string;
  major: string;
  phoneNumber: string;
  email: string;
  track: string;
  submittedAt: string;
  techStack: string;
  link: string;
  note: string;
  answers: AnswerData[];
  marked: boolean;
}

const getDocsDetailPath = () => '/api/admin/application/detail';

const docsDetailQueryKey = [getDocsDetailPath()];

export const getDocsDetail = async (
  id: number
): Promise<DocsDetailInterface> => {
  const response = await fetchInstance.get<DocsDetailInterface>(
    getDocsDetailPath(),
    {
      params: {
        id: id,
      },
    }
  );
  return response.data;
};

export const useGetDocsDetail = (id: number) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<DocsDetailInterface, Error>({
    queryKey: [docsDetailQueryKey, id],
    queryFn: () => getDocsDetail(id),
    enabled: !!accessToken,
  });
};
