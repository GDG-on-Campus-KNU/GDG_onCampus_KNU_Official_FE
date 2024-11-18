import { memo } from 'react';

import Text from '@gdg/components/common/typography/Text';

import gdgknu from '@gdg/assets/gdgknu.png';

import { useGetTeamMate } from '@gdg/apis/hooks/team/useGetTeamMate';

import TeamName from '../name/TeamName';
import styled from '@emotion/styled';

const TeamMember = ({
  selectedTeamId,
  selectedTeamName,
}: {
  selectedTeamId: number;
  selectedTeamName: string;
}) => {
  const { data } = useGetTeamMate(selectedTeamId);
  console.log(1);

  return (
    <>
      <TeamName selectedTeamName={selectedTeamName} />
      <MemberListContainer>
        {data?.map((member) => (
          <MemberBox key={member.id}>
            <TextWrapper>
              <MemberText weight='700' size='md'>
                {member.track}
              </MemberText>
              <MemberText weight='500' size='sm'>
                {member.name}
              </MemberText>
            </TextWrapper>
          </MemberBox>
        ))}
      </MemberListContainer>
    </>
  );
};

export default memo(TeamMember);

const MemberListContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 46px;
  margin-top: 44px;
  white-space: nowrap;
  overflow-x: auto;

  scrollbar-width: auto; /* Firefox */
  scrollbar-color: auto; /* Firefox */

  &::-webkit-scrollbar {
    display: block;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (max-width: 500px) {
    gap: 22px;
    margin-top: 30px;
  }
`;

const MemberBox = styled.div`
  min-width: 140px;
  z-index: 1;
  height: 140px;
  border-radius: 12px;
  padding: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url(${gdgknu});
  background-size: cover;
  flex: 0 0 auto;

  @media (max-width: 500px) {
    min-width: 66px;
    height: 66px;
    padding: 10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MemberText = styled(Text)`
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
