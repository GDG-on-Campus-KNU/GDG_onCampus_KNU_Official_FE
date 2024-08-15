import { Oval } from 'react-loader-spinner';

import Text from '@gdsc/components/common/typography/Text';

import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import MemberProfile from './MemberProfile';
import { MemberTable, ParentTeamBox } from './TeamBox.style';
import { Droppable } from '@hello-pangea/dnd';

const SubTeamBox = ({
  subTeamId,
  subTeamName,
}: {
  subTeamId: number;
  subTeamName: string;
}) => {
  const { data: SubTeamMember, isLoading } = useGetTeamMember(subTeamId);

  if (isLoading) {
    return (
      <Oval
        visible={true}
        height='30'
        width='30'
        color='#fff'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    );
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
