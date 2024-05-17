import Input from '@gdsc/components/form/Input';
import TextArea from '@gdsc/components/form/TextArea';
import PageTitle from '@gdsc/components/title/PageTitle';

import DefaultProfile from '@gdsc/assets/DefaultProfile.svg';
import PencilIcon from '@gdsc/assets/EditIcon.svg';

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

const ProfileContainer = styled.div`
  ${displayCenter}
  align-items: center;
  position: relative;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  background-color: var(--color-que);
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
`;

const EditBtn = styled.button`
  ${displayCenter}
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;

  width: 32px;
  height: 32px;

  background-color: var(--color-white);

  border: none;
  border-radius: 50%;
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.15);
`;

const EditIcon = styled.img`
  color: var(--color-revolver);
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
          <ProfileContainer>
            <ProfileImg src={DefaultProfile} alt='profile' />
            <EditBtn>
              <EditIcon src={PencilIcon} alt='edit' />
            </EditBtn>
          </ProfileContainer>
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
