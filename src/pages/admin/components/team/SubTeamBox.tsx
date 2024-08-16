import { useEffect, lazy } from 'react';

import { LoadingView } from '@gdsc/components/common/View/LoadingView';
import Text from '@gdsc/components/common/typography/Text';

import close from '@gdsc/assets/admin/remove.svg';

import { deleteSubTeam } from '@gdsc/apis/hooks/admin/team/deleteSubTeam';
import { useGetTeamMember } from '@gdsc/apis/hooks/admin/team/useGetTeamMember';

import { RemoveBtn } from './CreateTeamToken.style';
import { MemberTable, ParentTeamBox, TitleWrapper } from './TeamBox.style';
import { useTeamUpdate } from '@gdsc/provider/TeamUpdate';
import { Droppable } from '@hello-pangea/dnd';

const MemberProfile = lazy(() => import('./MemberProfile'));

const SubTeamBox = ({
  subTeamId,
  subTeamName,
  index,
  totalLength,
  teamId,
}: {
  subTeamId: number;
  subTeamName: string;
  index: number;
  totalLength: number;
  teamId: number;
}) => {
  const {
    data: SubTeamMember,
    isLoading,
    refetch,
  } = useGetTeamMember(subTeamId);

  const { isTeamUpdate, setIsTeamUpdate } = useTeamUpdate();

  useEffect(() => {
    if (isTeamUpdate) {
      refetch();
      setIsTeamUpdate(false);
    }
  }, [isTeamUpdate, refetch, setIsTeamUpdate]);

  if (isLoading) {
    return <LoadingView />;
  }

  const handleClickRemoveTeam = async () => {
    const isConfirmed = confirm('정말 팀을 삭제하시겠습니까?');

    if (isConfirmed) {
      await deleteSubTeam({ parentTeamId: teamId });
      window.location.reload();
    }
  };

  return (
    <Droppable droppableId={`subteam-${subTeamId}`} type='MEMBER'>
      {(provided) => (
        <ParentTeamBox ref={provided.innerRef} {...provided.droppableProps}>
          <TitleWrapper>
            <Text color='white' size='md' weight='700'>
              {subTeamName}
            </Text>

            {index === totalLength - 1 && (
              <RemoveBtn onClick={handleClickRemoveTeam}>
                <img
                  src={close}
                  alt='close'
                  style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                />
              </RemoveBtn>
            )}
          </TitleWrapper>
          <MemberTable>
            {SubTeamMember?.map((member, index) => (
              <MemberProfile key={member.id} member={member} index={index} />
            ))}
            {provided.placeholder}
          </MemberTable>
        </ParentTeamBox>
      )}
    </Droppable>
  );
};

export default SubTeamBox;
