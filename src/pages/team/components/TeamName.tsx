import { lazy } from 'react';

import styled from '@emotion/styled';

const Text = lazy(() => import('@gdsc/components/common/typography/Text'));

const TeamName = ({ selectedTeamName }: { selectedTeamName: string }) => {
  return (
    <TeamContainer>
      <TeamTitleContainer>
        <TeamTitle size='lg' color='var(--color-white)' weight='700'>
          {selectedTeamName || '팀 이름을 선택하세요'}
        </TeamTitle>
      </TeamTitleContainer>
      <TextContainer>
        <TeamEx size='sm'>
          팀원분들과 함께 활동하실 팀 페이지 입니다. 팀 페이지에서는 팀원들과의
          소통과 협업을 위한 기능들이 제공됩니다.
        </TeamEx>
      </TextContainer>
    </TeamContainer>
  );
};

export default TeamName;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 62px 0px 62px;
  width: calc(100% - 134px);
`;

const TeamTitleContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

const TeamTitle = styled(Text)`
  @media (max-width: 500px) {
    font-size: var(--font-size-md);
  }
`;

const TeamEx = styled(Text)`
  @media (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;
