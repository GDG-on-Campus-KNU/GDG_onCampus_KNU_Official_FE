import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';

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
  const formattedDate = datePart.replace(/-/g, '. ');

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
