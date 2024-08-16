import { useEffect, lazy } from 'react';

import Text from '@gdsc/components/common/typography/Text';

import PlusBtn from '@gdsc/assets/admin/PlusBtn.svg';

import { postSubTeam } from '@gdsc/apis/hooks/admin/team/postSubTeam';
import type { SubTeam } from '@gdsc/apis/hooks/admin/team/useGetAllTeamToken';
import { useGetTeamMember } from '@gdsc/apis/hooks/admin/team/useGetTeamMember';

import {
  MemberTable,
  ParentTeamBox,
  PlusBox,
  TeamBoxContainer,
} from './TeamBox.style';
import { useTeamUpdate } from '@gdsc/provider/TeamUpdate';
import { Droppable } from '@hello-pangea/dnd';

const MemberProfile = lazy(() => import('./MemberProfile'));
const SubTeamBox = lazy(() => import('./SubTeamBox'));

const TeamBox = ({
  teamId,
  teamName,
  subTeams,
}: {
  teamId: number;
  teamName: string;
  subTeams: SubTeam[];
}) => {
  const { data: ParentTeamMember, refetch } = useGetTeamMember(teamId);
  const { isTeamUpdate, setIsTeamUpdate } = useTeamUpdate();

  useEffect(() => {
    if (isTeamUpdate) {
      refetch();
      setIsTeamUpdate(false);
    }
  }, [isTeamUpdate, refetch, setIsTeamUpdate]);

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
        subTeams.map((subTeam, index) => (
          <SubTeamBox
            key={subTeam.id}
            subTeamId={subTeam.id}
            subTeamName={subTeam.teamName}
            index={index}
            totalLength={subTeams.length}
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
