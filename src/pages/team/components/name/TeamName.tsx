import styled from '@emotion/styled';

import Text from '@gdg/components/common/typography/Text';

type TeamNameProps = {
  selectedTeamName?: string;
  description?: string;
  defaultTitle?: string;
};

const TeamName = ({
  selectedTeamName = '',
  description = '팀원분들과 함께 활동하실 팀 페이지 입니다. 팀 페이지에서는 팀원들과의 소통과 협업을 위한 기능들이 제공됩니다.',
  defaultTitle = '팀 이름을 선택하세요',
}: TeamNameProps) => {
  return (
    <TeamContainer>
      <TeamTitleContainer>
        <TeamTitle size='lg' color='var(--color-white)' weight='700'>
          {selectedTeamName || defaultTitle}
        </TeamTitle>
      </TeamTitleContainer>
      <TextContainer>
        <TeamEx size='sm'>{description}</TeamEx>
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
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 70%;
    width: 100%;
    height: 50%;
    background-color: var(--color-selective);
    opacity: 0.7;
    transform: translateY(-50%);
    z-index: -1;
  }

  @media (max-width: 500px) {
    font-size: var(--font-size-md);
  }
`;

const TeamEx = styled(Text)`
  @media (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;
