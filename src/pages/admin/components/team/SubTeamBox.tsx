import Text from '@gdsc/components/common/typography/Text';

import { useGetTeamMember } from '@gdsc/apis/hooks/admin/useGetTeamMember';

import { MemberBox, MemberTable, ParentTeamBox, TextWrapper } from './TeamBox';

const SubTeamBox = ({
  subTeamId,
  subTeamName,
  teamId,
}: {
  subTeamId: number;
  subTeamName: string;
  teamId: number;
}) => {
  const { data: SubTeamMember } = useGetTeamMember(teamId, subTeamId);

  return (
    <ParentTeamBox>
      <Text color='white' size='md' weight='700'>
        {subTeamName}
      </Text>
      <MemberTable>
        {SubTeamMember?.map((member) => (
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
  );
};

export default SubTeamBox;
