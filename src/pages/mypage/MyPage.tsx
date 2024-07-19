import { useMediaQuery } from 'react-responsive';

import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import Input from '@gdsc/components/common/form/Input';
import Profile from '@gdsc/components/common/form/Profile';
import TextArea from '@gdsc/components/common/form/TextArea';
import PageTitle from '@gdsc/components/common/title/PageTitle';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import TeamToken from './components/TeamToken';
import styled from '@emotion/styled';

const MyPageWrapper = styled.div<{ color: string }>`
  ${displayCenter}
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 800px;
  gap: 50px;

  margin-top: 20px;
  margin-bottom: 40px;
  padding: 35px 0px;

  background-color: ${(props) => props.color};
  border-radius: 12px;
`;

const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(auto, 470px);
  grid-template-rows: 1fr 1fr;
  gap: 25px 50px;

  @media (max-width: 500px) {
    grid-template-columns: 110px 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 15px 0;
    margin: 0px 20px;
  }
`;

const EmptyDiv = styled.div`
  background-color: transparent;
  ${displayCenter}
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 500px) {
    grid-column: span 2;
  }
`;

const InputLabel = styled.label`
  font-size: var(--font-size-md);
  font-weight: bold;

  font-family: 'Noto+Sans';
`;

const TokenContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  overflow-x: auto;
  white-space: nowrap;
  box-sizing: border-box;

  background-color: transparent;

  &::-webkit-scrollbar {
    height: 6px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-que);
    border-radius: 12px;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dove);
    border-radius: 12px;
    border: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to left, rgba(31, 22, 50), transparent);
  }
`;

const SubInfoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px 50px;
`;

const MobileSubInfoContainer = styled.div`
  width: 80%;
  box-sizing: border-box;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const ButtonContainer = styled.div`
  width: 90%;
  max-width: 596px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 50px 0px 100px 0px;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

const MyPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <>
      <PageTitle MainTitle='마이페이지' SubTitle='My Page' />
      <MyPageWrapper color='var(--color-abony)'>
        <MainInfoContainer>
          <Profile />
          <Input id='name' label='이름' placeholder='ex) 홍길동' type='text' />
          {isMobile ? <></> : <EmptyDiv></EmptyDiv>}
          <EmptyDiv>
            <InputLabel>소속 팀</InputLabel>
            <TokenContainer>
              <TeamToken teamname='FE study 2팀' />
              <TeamToken teamname='Solution Challenge 3팀' />
              <TeamToken teamname='2차 프로젝트 1팀' />
              <TeamToken teamname='FE study 2팀' />
            </TokenContainer>
          </EmptyDiv>
        </MainInfoContainer>
      </MyPageWrapper>
      <MyPageWrapper color='transparent'>
        <TextArea
          id='intro'
          label='자기소개'
          placeholder='자기소개를 500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
        />
        {isMobile ? (
          <MobileSubInfoContainer>
            <Input id='age' label='나이' placeholder='ex) 20' type='number' />
            <Input
              id='major'
              label='전공'
              placeholder='ex) 컴퓨터학부 글로벌소프트웨어융합전공'
              type='text'
            />
            <Input
              id='studentNumber'
              label='학번'
              placeholder='ex)2024111222'
              type='text'
            />
            <Input
              id='email'
              label='이메일'
              placeholder='ex) honggildong@gmail.com'
              type='text'
            />
          </MobileSubInfoContainer>
        ) : (
          <SubInfoContainer>
            <Input id='age' label='나이' placeholder='ex) 20' type='number' />
            <Input
              id='major'
              label='전공'
              placeholder='ex) 컴퓨터학부 글로벌소프트웨어융합전공'
              type='text'
            />
            <Input
              id='studentNumber'
              label='학번'
              placeholder='ex)2024111222'
              type='text'
            />
            <Input
              id='email'
              label='이메일'
              placeholder='ex) honggildong@gmail.com'
              type='text'
            />
          </SubInfoContainer>
        )}
      </MyPageWrapper>
      <ButtonContainer>
        <CompleteBtn
          size='lg'
          color='blue'
          backgroundColor='blue'
          hoverColor='white'
          type='submit'
        >
          저장하기
        </CompleteBtn>
      </ButtonContainer>
    </>
  );
};

export default MyPage;
