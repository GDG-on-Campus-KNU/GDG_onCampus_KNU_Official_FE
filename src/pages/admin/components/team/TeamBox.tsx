import Text from '@gdsc/components/common/typography/Text';

import PlusBtn from '@gdsc/assets/admin/PlusBtn.svg';

import { postSubTeam } from '@gdsc/apis/hooks/admin/postSubTeam';
import type { SubTeam } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import SubTeamBox from './SubTeamBox';
import styled from '@emotion/styled';

const TeamBox = ({
  teamId,
  teamName,
  subTeams,
}: {
  teamId: number;
  teamName: string;
  subTeams: SubTeam[];
}) => {
  const { data: ParentTeamMember } = useGetTeamMember(teamId, undefined);

  const onClickTeamBox = async () => {
    const isConfirmed = confirm('팀을 추가하시겠습니까?');
    if (isConfirmed) {
      await postSubTeam({ teamId, subTeamId: undefined });
      window.location.reload();
    }
  };

  return (
    <TeamBoxContainer>
      <ParentTeamBox>
        <Text color='white' size='md' weight='700'>
          {teamName}
        </Text>

        <MemberTable>
          {ParentTeamMember?.map((member) => (
            <MemberBox key={member.id}>
              <img
                src={member.profileUrl}
                alt=''
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  margin: '0 15px 0 0',
                }}
              />
              <TextWrapper>
                <Text color='white' size='md' weight='700'>
                  {member.name}
                </Text>
                <Text color='white' size='xs' weight='500'>
                  {member.studentNumber}
                </Text>
              </TextWrapper>
            </MemberBox>
          ))}
        </MemberTable>
      </ParentTeamBox>

      {subTeams.length > 0 &&
        subTeams.map((subTeam) => (
          <SubTeamBox
            key={subTeam.id}
            subTeamId={subTeam.id}
            subTeamName={subTeam.teamName}
            teamId={teamId}
          />
        ))}

      <PlusBox onClick={onClickTeamBox}>
        <img
          src={PlusBtn}
          alt=''
          style={{
            width: '40px',
            height: '40px',
          }}
        />
      </PlusBox>
    </TeamBoxContainer>
  );
};

export default TeamBox;

const TeamBoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  overflow-x: auto;
  gap: 30px;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 6px;
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-abony);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export const ParentTeamBox = styled.div`
  width: 195px;
  height: 360px;
  padding: 20px;
  background-color: var(--color-que);
  border-radius: 12px;
  flex-shrink: 0;
`;

export const MemberTable = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export const MemberBox = styled.div`
  width: calc(100% - 36px);
  height: 40px;
  background-color: var(--color-more-transparent);
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  cursor: grab;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const PlusBox = styled.div`
  width: 235px;
  height: 400px;
  border-radius: 12px;
  border: 2px dashed var(--color-transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;
