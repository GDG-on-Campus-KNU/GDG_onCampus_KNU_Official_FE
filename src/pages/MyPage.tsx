import Input from '@gdsc/components/form/Input';
import Profile from '@gdsc/components/form/Profile';
import TextArea from '@gdsc/components/form/TextArea';
import PageTitle from '@gdsc/components/title/PageTitle';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

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
  grid-template-columns: 80px minmax(470px, auto);
  grid-template-rows: 1fr 1fr;
  gap: 25px 50px;
`;

const EmptyDiv = styled.div`
  background-color: transparent;
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
          <Input
            id='name'
            label='소속 팀'
            placeholder='ex) 홍길동'
            type='text'
          />
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
