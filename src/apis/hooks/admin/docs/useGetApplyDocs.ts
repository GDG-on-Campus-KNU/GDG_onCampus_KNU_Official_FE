import { useQuery } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';
import { MemberData } from '@gdg/types/AdminInterface';

export interface applyDocsInterface {
  data: MemberData[];
  page: number;
  hasNext: boolean;
  totalPage: number;
}

const getApplyDocsPath = () => '/api/admin/application';

const applyDocsQueryKey = [getApplyDocsPath()];

export const getApplyDocs = async (
  track: string,
  isMarked: boolean,
  page: number,
  size: number,
  classYearId: number
): Promise<applyDocsInterface> => {
  const response = await fetchInstance.get<applyDocsInterface>(
    getApplyDocsPath(),
    {
      params: {
        track,
        isMarked,
        page,
        size,
        classYearId,
      },
    }
  );
  return response.data;
};

export const useGetApplyDocs = (
  track: string,
  isMarked: boolean,
  page: number,
  size: number,
  classYearId: number
) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<applyDocsInterface, Error>({
    queryKey: [applyDocsQueryKey, track, isMarked, page, size, classYearId],
    queryFn: () => getApplyDocs(track, isMarked, page, size, classYearId),
    enabled:
      !!accessToken &&
      track !== undefined &&
      isMarked !== undefined &&
      page !== undefined &&
      classYearId !== undefined,
  });
};
