import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { ApplyExInterface } from '@gdg/types/ApplyInterface';

const ApplyBox = styled.div`
  background-color: var(--color-white);
  width: 270px;
  height: 254px;
  padding: 30px 15px 16px 15px;
  border-radius: 12px;
  z-index: 3;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const AppText = styled(Text)`
  margin-right: 20px;
`;

const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
`;

interface PCApplyBoxProps {
  data: ApplyExInterface | null;
}

const PCApplyBox = ({ data }: PCApplyBoxProps) => {
  if (!data) {
    return null;
  }
  return (
    <ApplyBox>
      <TextWrapper>
        <TextLine>
          <AppText color='black' weight='400' size='md'>
            지원직무
          </AppText>
          <Text color='black' weight='700' size='md'>
            {data.korean}
          </Text>
        </TextLine>
        <TextLine>
          <AppText color='black' weight='400' size='md'>
            기한 일자
          </AppText>
          <Text color='black' weight='700' size='md'>
            {data.duedate}
          </Text>
        </TextLine>
      </TextWrapper>
      <NavLink to={data.link}>
        <CommonBtn
          color='blue'
          backgroundColor='blue'
          hoverColor='blue'
          width='100%'
          height='43px'
          size='lg'
          padding='0px'
          type='button'
        >
          지원하기
        </CommonBtn>
      </NavLink>
      <ButtonWrapper>
        <NavLink to='/apply'>
          <CommonBtn
            color='gray'
            backgroundColor='gray'
            type='button'
            width='100%'
            height='43px'
            padding='0px'
            size='lg'
            hoverColor='blue'
          >
            목록으로
          </CommonBtn>
        </NavLink>
      </ButtonWrapper>
    </ApplyBox>
  );
};

export default PCApplyBox;
