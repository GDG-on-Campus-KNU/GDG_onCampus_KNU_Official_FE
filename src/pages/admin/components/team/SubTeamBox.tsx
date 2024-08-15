import { useEffect, lazy } from 'react';

import { LoadingView } from '@gdsc/components/common/View/LoadingView';
import Text from '@gdsc/components/common/typography/Text';

import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import { MemberTable, ParentTeamBox } from './TeamBox.style';
import { useTeamUpdate } from '@gdsc/provider/TeamUpdate';
import { Droppable } from '@hello-pangea/dnd';

const MemberProfile = lazy(() => import('./MemberProfile'));

const SubTeamBox = ({
  subTeamId,
  subTeamName,
}: {
  subTeamId: number;
  subTeamName: string;
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

  return (
    <Droppable droppableId={`subteam-${subTeamId}`} type='MEMBER'>
      {(provided) => (
        <ParentTeamBox ref={provided.innerRef} {...provided.droppableProps}>
          <Text color='white' size='md' weight='700'>
            {subTeamName}
          </Text>
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
