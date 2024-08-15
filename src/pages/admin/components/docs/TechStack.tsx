import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import linkIcon from '@gdsc/assets/admin/linkIcon.svg';

import styled from '@emotion/styled';

const TechStackList: string[] = ['JAVA', 'PHP'];

const TechStackWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const TechStackCard = styled.div`
  padding: 10px;

  color: var(--color-selective);
  border: 1px solid var(--color-selective);

  border-radius: 12px;

  font-size: var(--font-size-xs);
  font-weight: bold;
`;

const TechStack = () => {
  return (
    <TechStackWrapper>
      <Text size='sm' weight='bold' color='black'>
        기술스택
      </Text>
      <CardWrapper>
        {TechStackList.map((tech) => (
          <TechStackCard key={tech}>{tech}</TechStackCard>
        ))}
      </CardWrapper>
      <CommonBtn
        type='button'
        width='100%'
        height='auto'
        color='yellow'
        hoverColor='yellow'
        backgroundColor='yellow'
      >
        <img src={linkIcon} alt='link' />
        <Text size='sm' weight='bold' color='white'>
          깃허브 링크
        </Text>
      </CommonBtn>
    </TechStackWrapper>
  );
};

export default TechStack;
