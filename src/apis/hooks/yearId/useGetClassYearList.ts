import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

export type classYearList = {
  id: number;
  name: string;
  applyStartDateTime: string;
  applyEndDateTime: string;
};

const getClassYearListPath = () => '/api/admin/class-year';

const teamListQueryKey = [getClassYearListPath()];

const getClassYearList = async () => {
  const response = await fetchInstance.get(getClassYearListPath());
  const data: classYearList[] = response.data;

  // 신규 기수(5기)를 추가해 드롭다운에서 선택할 수 있도록 합니다.
  const hasFifth = data.some(
    (year) => year.id === 5 || year.name === '5기'
  );
  if (!hasFifth) {
    data.push({
      id: 5,
      name: '5기',
      applyStartDateTime: '',
      applyEndDateTime: '',
    });
  }

  return data;
};

export const useGetClassYearList = (): UseQueryResult<
  classYearList[],
  Error
> => {
  const accessToken = sessionStorage.getItem('accessToken');

  return useQuery<classYearList[], Error>({
    queryKey: teamListQueryKey,
    queryFn: getClassYearList,
    enabled: !!accessToken,
  });
};
