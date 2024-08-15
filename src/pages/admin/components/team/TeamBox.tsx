import Text from '@gdsc/components/common/typography/Text';

import PlusBtn from '@gdsc/assets/admin/PlusBtn.svg';

import { postSubTeam } from '@gdsc/apis/hooks/admin/postSubTeam';
import type { SubTeam } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import SubTeamBox from './SubTeamBox';
import {
  MemberBox,
  MemberTable,
  ParentTeamBox,
  PlusBox,
  TeamBoxContainer,
  TextWrapper,
} from './TeamBox.style';

const TeamBox = ({
  teamId,
  teamName,
  subTeams,
}: {
  teamId: number;
  teamName: string;
  subTeams: SubTeam[];
}) => {
  const { data: ParentTeamMember } = useGetTeamMember(teamId);

  const onClickTeamBox = async () => {
    const isConfirmed = confirm('팀을 추가하시겠습니까?');
    if (isConfirmed) {
      await postSubTeam({ teamId });
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

      {subTeams &&
        subTeams.length > 0 &&
        subTeams.map((subTeam) => (
          <SubTeamBox
            key={subTeam.id}
            subTeamId={subTeam.id}
            subTeamName={subTeam.teamName}
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
