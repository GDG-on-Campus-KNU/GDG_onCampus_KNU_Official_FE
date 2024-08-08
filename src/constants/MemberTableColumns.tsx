import { PersonData } from '@gdsc/pages/admin/PeopleData';

import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<PersonData>();
export const columns = [
  columnHelper.display({
    id: 'actions',
    cell: () => {
      return (
        <>
          <input type='checkbox' id='checkbox-action' />
          <label htmlFor='checkbox-action'>{''}</label>
        </>
      );
    },
  }),
  columnHelper.accessor('track', { header: '트랙' }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('studentNumber', { header: '학번' }),
  columnHelper.accessor('email', { header: '이메일' }),
  columnHelper.accessor('phoneNumber', { header: '전화번호' }),
  columnHelper.accessor('teams', { header: '소속팀' }),
  columnHelper.accessor('role', { header: '상태' }),
];
