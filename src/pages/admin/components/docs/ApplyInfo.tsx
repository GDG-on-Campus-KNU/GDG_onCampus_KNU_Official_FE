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

interface IApplyInfo {
  track: string;
  submittedAt: string;
}

const ApplyInfo = ({ track, submittedAt }: IApplyInfo) => {
  const datePart = submittedAt.split(' ')[0];

  // 형식 변환
  const formattedDate = datePart.replace(/-/g, '. ');

  console.log(formattedDate); // "2024. 08. 13"

  return (
    <InfoWrapper>
      <InfoContainer>
        <Text size='sm' weight='bold' color='black'>
          지원영역
        </Text>
        <Text size='sm' weight='normal' color='black'>
          {track}
        </Text>
      </InfoContainer>
      <InfoContainer>
        <Text size='sm' weight='bold' color='black'>
          지원일자
        </Text>
        <Text size='sm' weight='normal' color='black'>
          {formattedDate}
        </Text>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default ApplyInfo;
