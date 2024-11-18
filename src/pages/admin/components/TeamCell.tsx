import styled from '@emotion/styled';
import { useState } from 'react';

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

export default TeamCell;
