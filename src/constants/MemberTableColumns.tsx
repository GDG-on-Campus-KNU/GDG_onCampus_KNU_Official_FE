import { useState } from 'react';

import { PersonData } from '@gdsc/pages/admin/PeopleData';

import styled from '@emotion/styled';
import { createColumnHelper } from '@tanstack/react-table';

const DropdownBtn = styled.button`
  color: var(--color-white);
  background-color: transparent;

  border: none;
  outline: none;

  &:hover {
    color: var(--color-silver);
  }
`;

const DropdownListContainer = styled.ul`
  width: auto;
  height: auto;

  padding: 0px 10px;

  border-radius: 12px;

  background-color: var(--color-white);

  position: absolute;
  z-index: 1000;
`;

const DropdownListItem = styled.li`
  color: var(--color-halti);
  padding: 10px;
  border-bottom: 1px solid var(--color-silver);

  &:last-child {
    border-bottom: none;
  }
`;

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
  columnHelper.accessor('teams', {
    header: '소속팀',
    cell: ({ row }) => {
      const teams = row.original.teams;
      return <TeamCell teams={teams} />;
    },
  }),
  columnHelper.accessor('role', { header: '상태' }),
];

const TeamCell = ({
  teams,
}: {
  teams: { teamName: string; TeamPageUrl: string }[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <span>
        {Array.isArray(teams) && teams.length > 0 ? teams[0].teamName : '없음'}{' '}
      </span>
      {teams.length > 1 && (
        <>
          <DropdownBtn onClick={toggleDropdown}>▼</DropdownBtn>
          {isOpen && (
            <DropdownListContainer>
              {teams
                .slice(1)
                .map(
                  (
                    team: { teamName: string; TeamPageUrl: string },
                    idx: number
                  ) => (
                    <DropdownListItem key={idx}>
                      {team.teamName}
                    </DropdownListItem>
                  )
                )}
            </DropdownListContainer>
          )}
        </>
      )}
    </div>
  );
};
