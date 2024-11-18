import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';

type Props = {
  response: {
    total: number;
    openCount: number;
    notOpenCount: number;
    approvedCount: number;
    rejectedCount: number;
  };
};
const DocsInfoBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 0;
  border-radius: 12px;
  background-color: #ffffff26;
`;

const TextBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  border-right: 1px solid white;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  :last-child {
    border-right: none;
  }
`;

const CurrentApplyInfo = ({ response }: Props) => {
  return (
    <DocsInfoBox>
      <TextBox>
        <Text size='md'>전체 지원자</Text>
        <Text size='xxl' weight='700'>
          {response.total}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>미열람</Text>
        <Text size='xxl' weight='700'>
          {response.notOpenCount}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>열람</Text>
        <Text size='xxl' weight='700'>
          {response.openCount}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>불합격</Text>
        <Text size='xxl' weight='700'>
          {response.rejectedCount}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>최종합격</Text>
        <Text size='xxl' weight='700'>
          {response.approvedCount}
        </Text>
      </TextBox>
    </DocsInfoBox>
  );
};

export default CurrentApplyInfo;
