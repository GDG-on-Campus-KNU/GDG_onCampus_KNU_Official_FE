import Input from '@gdsc/components/form/Input';
import Profile from '@gdsc/components/form/Profile';
import TextArea from '@gdsc/components/form/TextArea';
import PageTitle from '@gdsc/components/title/PageTitle';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import TeamToken from './components/TeamToken';
import styled from '@emotion/styled';

const MyPageWrapper = styled.div`
  ${displayCenter}

  width: 90%;
  max-width: 800px;

  margin-top: 40px;
  padding: 35px 0px;

  background-color: var(--color-abony);
  border-radius: 12px;
`;

const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(auto, 470px);
  grid-template-rows: 1fr 1fr;
  gap: 25px 50px;
`;

const EmptyDiv = styled.div`
  background-color: transparent;
  ${displayCenter}
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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
    width: 50px; /* 오버레이의 너비 조절 */
    height: 100%;
    pointer-events: none; /* 오버레이가 클릭 이벤트를 막지 않도록 설정 */
    background: linear-gradient(to left, rgba(31, 22, 50), transparent);
  }
`;

const MyPage = () => {
  return (
    <>
      <PageTitle MainTitle='마이페이지' SubTitle='My Page' />
      <MyPageWrapper>
        <MainInfoContainer>
          <Profile />
          <Input id='name' label='이름' placeholder='ex) 홍길동' type='text' />
          <EmptyDiv></EmptyDiv>
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
      <MyPageWrapper>
        <TextArea
          id='intro'
          label='자기소개'
          placeholder='자기소개를 500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
        />
      </MyPageWrapper>
    </>
  );
};

export default MyPage;
