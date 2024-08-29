import CheckIcon from '@gdsc/assets/admin/Check.svg';
import star from '@gdsc/assets/admin/miniStar.svg';

import { MemberData } from '@gdsc/types/AdminInterface';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<MemberData>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = String(date.getFullYear()).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const translateTrack = (track: string): string => {
  switch (track) {
    case 'FRONT_END':
      return '프론트엔드';
    case 'BACK_END':
      return '백엔드';
    case 'ANDROID':
      return '안드로이드';
    case 'AI':
      return 'AI';
    case 'DESIGNER':
      return '디자이너';
    default:
      return track;
  }
};

export const columns = () => [
  columnHelper.accessor('marked', {
    header: '',
    cell: ({ getValue }) => {
      return getValue() ? <img src={star} alt='marked' /> : null;
    },
  }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('submittedAt', {
    header: '지원일자',
    cell: (props) => <p>{formatDate(props.getValue())}</p>,
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
