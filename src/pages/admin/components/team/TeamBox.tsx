import Text from '@gdsc/components/common/typography/Text';

import PlusBtn from '@gdsc/assets/admin/PlusBtn.svg';

import { postSubTeam } from '@gdsc/apis/hooks/admin/postSubTeam';
import type { SubTeam } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import MemberProfile from './MemberProfile';
import SubTeamBox from './SubTeamBox';
import {
  MemberTable,
  ParentTeamBox,
  PlusBox,
  TeamBoxContainer,
} from './TeamBox.style';
import { Droppable } from '@hello-pangea/dnd';

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

        <Droppable droppableId={`team-${teamId}`} type='MEMBER'>
          {(provided) => (
            <MemberTable ref={provided.innerRef} {...provided.droppableProps}>
              {ParentTeamMember?.map((member, index) => (
                <MemberProfile key={member.id} member={member} index={index} />
              ))}
              {provided.placeholder}
            </MemberTable>
          )}
        </Droppable>
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
