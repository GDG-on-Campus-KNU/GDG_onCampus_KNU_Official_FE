import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import CommonBtn from '@gdsc/components/button/CommonBtn';
import Input from '@gdsc/components/form/Input';
import Text from '@gdsc/components/typography/Text';

import { AuthWrapper, AuthBox } from '@gdsc/styles/AuthModalStyle';
import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const TitleContainer = styled.h2`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  margin: 0px;

  ${displayCenter}
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
`;

const ContentContainer = styled.div`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  ${displayCenter}
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }

  gap: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  ${displayCenter}
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const InquiryModal = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const navigate = useNavigate();

  return (
    <AuthWrapper>
      <AuthBox color='navy'>
        <TitleContainer>
          {isMobile ? (
            <Text size='lg' color='white' weight='bold' whiteSpace='normal'>
              기본정보 <span style={{ color: 'red' }}>*</span>
            </Text>
          ) : (
            <Text size='xl' color='white' weight='bold' whiteSpace='normal'>
              기본정보 <span style={{ color: 'red' }}>*</span>
            </Text>
          )}
          <Line />
          <Text size='sm' color='white'>
            온라인 지원서류에 입력한 이름과 학번으로 지원서 조회가 가능해요! 각
            항목을 정확히 기입해주세요.
          </Text>
        </TitleContainer>
        <ContentContainer>
          <Input id='name' label='이름' placeholder='ex) 홍길동' type='text' />
          <Input
            id='studentNumber'
            label='학번'
            placeholder='ex) 2024111222'
            type='text'
          />
        </ContentContainer>
        <ButtonContainer>
          <CommonBtn
            color='blue'
            backgroundColor='blue'
            hoverColor='blue'
            size='lg'
            width='100%'
            height='auto'
            padding='5px'
            mdWidth='100%'
            mWidth='100%'
            mHeight='30px'
            type='submit'
          >
            조회하기
          </CommonBtn>

          <CommonBtn
            color='gray'
            backgroundColor='gray'
            hoverColor='navy'
            size='lg'
            width='100%'
            height='auto'
            padding='5px'
            mdWidth='100%'
            mWidth='100%'
            mHeight='30px'
            type='button'
            onClick={() => navigate(-1)}
          >
            돌아가기
          </CommonBtn>
        </ButtonContainer>
      </AuthBox>
    </AuthWrapper>
  );
};

export default InquiryModal;
