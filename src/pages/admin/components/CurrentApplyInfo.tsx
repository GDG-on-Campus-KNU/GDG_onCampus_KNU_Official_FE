import Text from '@gdsc/components/common/typography/Text';

import styled from '@emotion/styled';

type CurrentApplyInfoProps = {
  response: Array<{
    open: boolean;
    marked: boolean;
    track: string;
  }>;
  all: number;
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

const CurrentApplyInfo = ({ response, all }: CurrentApplyInfoProps) => {
  const allApply = response.length;
  const open = response.filter((item) => item.open).length;
  const notOpen = allApply - open;
  const docsPass = response.filter((item) => item.marked).length;
  const notPass = allApply - docsPass;
  return (
    <DocsInfoBox>
      <TextBox>
        <Text size='md'>전체 지원자</Text>
        <Text size='xxl' weight='700'>
          {all}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>미열람</Text>
        <Text size='xxl' weight='700'>
          {notOpen}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>열람</Text>
        <Text size='xxl' weight='700'>
          {open}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>불합격</Text>
        <Text size='xxl' weight='700'>
          {notPass}
        </Text>
      </TextBox>
      <TextBox>
        <Text size='md'>최종합격</Text>
        <Text size='xxl' weight='700'>
          {docsPass}
        </Text>
      </TextBox>
    </DocsInfoBox>
  );
};

export default CurrentApplyInfo;
