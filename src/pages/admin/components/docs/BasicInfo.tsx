import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';
import { useMediaQuery } from 'react-responsive';

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

interface IBasicInfo {
  name: string;
  studentNumber: string;
  major: string;
  phoneNumber: string;
  email: string;
}

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

const BasicInfo = ({
  name,
  studentNumber,
  major,
  phoneNumber,
  email,
}: IBasicInfo) => {
  return (
    <>
      <CardWrapper>
        <InfoCard category='이름' info={name} />
        <InfoCard category='학번' info={studentNumber} />
        <InfoCard category='학과' info={major} />
      </CardWrapper>
      <CardWrapper>
        <InfoCard category='전화번호' info={phoneNumber} />
        <InfoCard category='이메일' info={email} />
      </CardWrapper>
    </>
  );
};

export default BasicInfo;
