import Text from '@gdsc/components/common/typography/Text';

import styled from '@emotion/styled';

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
`;

const ApplyInfo = () => {
  return (
    <InfoWrapper>
      <InfoContainer>
        <Text size='sm' weight='bold' color='black'>
          지원영역
        </Text>
        <Text size='sm' weight='normal' color='black'>
          백엔드 개발자
        </Text>
      </InfoContainer>
      <InfoContainer>
        <Text size='sm' weight='bold' color='black'>
          지원일자
        </Text>
        <Text size='sm' weight='normal' color='black'>
          2024. 08. 14
        </Text>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default ApplyInfo;
