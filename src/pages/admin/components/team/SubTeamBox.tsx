import { deleteSubTeam } from '@gdg/apis/hooks/admin/team/deleteSubTeam';
import { useGetTeamMember } from '@gdg/apis/hooks/admin/team/useGetTeamMember';
import close from '@gdg/assets/admin/remove.svg';
import { LoadingView } from '@gdg/components/common/View/LoadingView';
import Text from '@gdg/components/common/typography/Text';
import { useTeamUpdate } from '@gdg/provider/TeamUpdate';
import { Droppable } from '@hello-pangea/dnd';
import { useEffect, lazy } from 'react';

import { RemoveBtn } from './CreateTeamToken.style';
import { MemberTable, ParentTeamBox, TitleWrapper } from './TeamBox.style';

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
