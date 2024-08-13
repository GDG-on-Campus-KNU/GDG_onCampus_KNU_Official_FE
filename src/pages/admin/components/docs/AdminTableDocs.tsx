import CheckIcon from '@gdsc/assets/admin/Check.svg';

import Stars from './Stars';
import { MemberData } from '@gdsc/types/AdminInterface';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<MemberData>();

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const translateTrack = (track: string): string => {
  switch (track) {
    case 'FRONT_END':
      return '프론트엔드 개발자';
    case 'BACK_END':
      return '백엔드 개발자';
    case 'ANDROID':
      return '안드로이드 개발자';
    case 'AI':
      return 'AI 개발자';
    case 'DESIGNER':
      return '디자이너';
    default:
      return track;
  }
};

export const columns = () => [
  columnHelper.accessor('marked', {
    header: ' ',
    cell: ({ getValue }) => (getValue() ? <Stars color='yellow' /> : null),
  }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('submittedAt', {
    header: '지원일자',
    cell: ({ getValue }) => formatDate(getValue() as string),
  }),
  columnHelper.accessor('studentNumber', { header: '학번' }),
  columnHelper.accessor('major', { header: '학과' }),
  columnHelper.accessor('track', {
    header: '지원영역',
    cell: ({ getValue }) => translateTrack(getValue() as string),
  }),
  columnHelper.accessor('open', {
    header: '열람',
    cell: ({ getValue }) =>
      getValue() ? <img src={CheckIcon} alt='Checked' /> : null,
  }),
];
