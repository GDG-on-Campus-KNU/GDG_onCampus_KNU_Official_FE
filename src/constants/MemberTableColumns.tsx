import { createColumnHelper } from '@tanstack/react-table';

import { PersonData } from '@gdg/apis/hooks/admin/status/useGetUserList';
import TeamCell from '@gdg/pages/admin/components/status/TeamCell';

const Role: { [key: string]: string } = {
  ROLE_CORE: 'Core',
  ROLE_MEMBER: 'Member',
  ROLE_GUEST: 'Guest',
};

const columnHelper = createColumnHelper<PersonData>();
export const columns = (
  selectedUser: number[],
  addSelectedUser: (id: number) => void
) => [
  columnHelper.display({
    id: 'actions',
    cell: ({ row }) => {
      return (
        <>
          <input
            type='checkbox'
            id={`checkbox-action-${row.id}`}
            checked={selectedUser.includes(row.original.id)}
            onChange={() => addSelectedUser(row.original.id)}
          />
          <label htmlFor={`checkbox-action-${row.id}`}>{''}</label>
        </>
      );
    },
  }),
  columnHelper.accessor('track', { header: '트랙' }),
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('studentNumber', { header: '학번' }),
  columnHelper.accessor('email', { header: '이메일' }),
  columnHelper.accessor('phoneNumber', { header: '전화번호' }),
  columnHelper.accessor('teams', {
    header: '소속팀',
    cell: ({ row }) => {
      const teams = row.original.teams;
      return <TeamCell teams={teams} />;
    },
  }),
  columnHelper.accessor('role', {
    header: '상태',
    cell: ({ row }) => {
      const role: string = row.original.role;
      return Role[role];
    },
  }),
];
