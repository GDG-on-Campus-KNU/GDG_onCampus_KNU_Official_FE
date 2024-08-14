import Text from '@gdsc/components/common/typography/Text';

import styled from '@emotion/styled';

const TeamBox = ({
  teamId,
  teamName,
}: {
  teamId: number;
  teamName: string;
}) => {
  console.log(teamId, teamName);

  return (
    <TeamBoxContainer>
      <ParentTeamBox>
        <Text color='white' size='md' weight='700'>
          {teamName}
        </Text>
      </ParentTeamBox>
    </TeamBoxContainer>
  );
};

export default TeamBox;

const TeamBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  gap: 30px;
`;

const ParentTeamBox = styled.div`
  width: 195px;
  height: 360px;
  padding: 20px;
  background-color: var(--color-que);
  border-radius: 12px;
`;
