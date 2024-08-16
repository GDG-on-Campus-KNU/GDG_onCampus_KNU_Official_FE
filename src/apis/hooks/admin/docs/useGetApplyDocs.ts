import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { MemberData } from '@gdsc/types/AdminInterface';
import { useQuery } from '@tanstack/react-query';

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
  size: number
): Promise<applyDocsInterface> => {
  const response = await fetchInstance.get<applyDocsInterface>(
    getApplyDocsPath(),
    {
      params: {
        track,
        isMarked,
        page,
        size,
      },
    }
  );
  return response.data;
};

export const useGetApplyDocs = (
  track: string,
  isMarked: boolean,
  page: number,
  size: number
) => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<applyDocsInterface, Error>({
    queryKey: [applyDocsQueryKey, track, isMarked, page, size],
    queryFn: () => getApplyDocs(track, isMarked, page, size),
    enabled:
      !!accessToken &&
      track !== undefined &&
      isMarked !== undefined &&
      page !== undefined,
  });
};
