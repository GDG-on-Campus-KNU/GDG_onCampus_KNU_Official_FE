import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

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

const Memo = () => {
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
        >
          저장
        </CommonBtn>
      </TitleWrapper>

      <MemoBox
        placeholder='간단한 메모를 해보세요!'
        value='Pizza ipsum dolor meat lovers buffalo. Ipsum cheese parmesan lovers tomato melted tossed Chicago meatball. Sautéed meatball Chicago pie sautéed Hawaiian thin red mozzarella. 

Chicken rib buffalo fresh lasagna Bianca black marinara stuffed NY. Aussie sautéed red white.'
      />
    </MemoWrapper>
  );
};

export default Memo;
