import { useState } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import { usePatchDocsMemo } from '@gdsc/apis/hooks/admin/docs/usePatchDocsMemo';

import styled from '@emotion/styled';

const MemoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MemoBox = styled.textarea`
  width: 100%;
  height: 126px;

  overflow-y: auto;

  border-radius: 12px;
  padding: 10px;
  background-color: rgba(217, 217, 217, 0.5);
  box-sizing: border-box;

  border: none;
  outline: none;
`;

const Memo = ({ id, note }: { id: number | null; note: string | null }) => {
  const [memo, setMemo] = useState<string | null>(note || null);
  const { mutate } = usePatchDocsMemo();

  const handleMemoBoxChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleSaveClick = () => {
    if (id !== null && memo !== null) {
      mutate(
        { id, memo },
        {
          onError: (error) => {
            console.error('API 호출 실패:', error);
            alert('메모 저장에 실패했습니다.');
          },
        }
      );
    } else {
      alert('변경된 메모 내용이 없습니다.');
    }
  };

  return (
    <MemoWrapper>
      <TitleWrapper>
        <Text size='sm' weight='bold' color='black'>
          메모
        </Text>
        <CommonBtn
          type='button'
          width='60px'
          height='30px'
          padding='5px'
          size='xs'
          color='innerYellow'
          hoverColor='innerYellow'
          backgroundColor='innerYellow'
          onClick={handleSaveClick}
        >
          저장
        </CommonBtn>
      </TitleWrapper>
      <MemoBox
        placeholder='간단한 메모를 해보세요!'
        value={memo ? memo.replace(/['"]/g, '') : ''}
        onChange={handleMemoBoxChange}
      />
    </MemoWrapper>
  );
};

export default Memo;
