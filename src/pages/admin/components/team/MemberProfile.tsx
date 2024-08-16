import Text from '@gdsc/components/common/typography/Text';

import type { TeamMember } from '@gdsc/apis/hooks/admin/team/useGetTeamMember';

import { MemberBox, TextWrapper } from './TeamBox.style';
import { Draggable } from '@hello-pangea/dnd';

const MemberProfile = ({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) => {
  return (
    <Draggable draggableId={`member-${member.id}`} index={index}>
      {(provided) => (
        <MemberBox
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  );
};

export default MemberProfile;
