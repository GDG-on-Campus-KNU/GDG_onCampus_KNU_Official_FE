import { useMediaQuery } from 'react-responsive';

import Text from '@gdsc/components/common/typography/Text';

import styled from '@emotion/styled';

const CardWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 20px;
  margin-top: 15px;

  @media (max-width: 1200px) {
    gap: 5px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 10px;

  padding: 10px;
  border-radius: 12px;

  background-color: rgba(217, 217, 217, 0.5);
  white-space: nowrap;
`;

const InfoCard = ({ category, info }: { category: string; info: string }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  return (
    <CardContainer>
      <Text size='xs' weight='bold' color='black'>
        {!isTablet && `${category} | `}
        {isTablet && `${category} `}
      </Text>
      <Text size='xs' color='black'>
        {info}
      </Text>
    </CardContainer>
  );
};

const BasicInfo = () => {
  return (
    <>
      <CardWrapper>
        <InfoCard category='이름' info='김구글' />
        <InfoCard category='학번' info='2020111222' />
        <InfoCard category='학과' info='컴퓨터학부 글로벌소프트웨어융합전공' />
      </CardWrapper>
      <CardWrapper>
        <InfoCard category='전화번호' info='010-0000-0000' />
        <InfoCard category='이메일' info='Googlegoogle456@gmail.com' />
      </CardWrapper>
    </>
  );
};

export default BasicInfo;
