import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useGetMyData } from '@gdg/apis/hooks/mypage/useGetMyData';
import { usePutMyData } from '@gdg/apis/hooks/mypage/usePutMyData';
import CompleteBtn from '@gdg/components/common/button/CompleteBtn';
import Input from '@gdg/components/common/form/Input';
import Profile from '@gdg/components/common/form/Profile';
import TextArea from '@gdg/components/common/form/TextArea';
import PageTitle from '@gdg/components/common/title/PageTitle';
import TeamToken from '@gdg/pages/mypage/components/TeamToken';
import { MypageMetaData } from '@gdg/router/components/MetaData';
import { displayCenter } from '@gdg/styles/LayoutStyle';
import { putUserDataInterface } from '@gdg/types/UserInterface';

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
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 50px 0px 100px 0px;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<putUserDataInterface>({
    name: '',
    age: 0,
    major: '',
    studentNumber: '',
    email: '',
    introduction: '',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const { data } = useGetMyData();

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserInfo((prev: putUserDataInterface) => ({
      ...prev,
      [id]: id === 'age' ? parseInt(value) : value,
    }));
  };

  const mutation = usePutMyData();

  const handleData = {
    name: userInfo.name,
    profileUrl: data?.profileUrl,
    age: userInfo.age,
    major: userInfo.major,
    studentNumber: userInfo.studentNumber,
    email: userInfo.email,
    introduction: userInfo.introduction,
  };

  const handleSave = () => {
    // console.log(123, handleData);
    mutation.mutate(handleData);
  };

  return (
    <>
      <MypageMetaData />
      <PageTitle MainTitle='마이페이지' SubTitle='My Page' />
      <MyPageWrapper color='var(--color-abony)'>
        <MainInfoContainer>
          <Profile />
          <Input
            id='name'
            label='이름'
            placeholder='ex) 홍길동'
            type='text'
            value={userInfo.name}
            onChange={handleInputChange}
          />
          {isMobile ? <></> : <EmptyDiv></EmptyDiv>}
          <EmptyDiv>
            <InputLabel>소속 팀</InputLabel>
            <TokenContainer>
              {data?.teamInfos.map((teamInfo, index) => {
                return <TeamToken key={index} teamData={teamInfo} />;
              })}
            </TokenContainer>
          </EmptyDiv>
        </MainInfoContainer>
      </MyPageWrapper>
      <MyPageWrapper color='transparent'>
        <TextArea
          id='introduction'
          label='자기소개'
          placeholder='자기소개를 500자 이내로 입력해주세요.'
          maxLength={500}
          color='var(--color-gradient)'
          defaultValue={userInfo.introduction}
          onChange={handleInputChange}
        />
        {isMobile ? (
          <MobileSubInfoContainer>
            <Input
              id='age'
              label='나이'
              placeholder='ex) 20'
              type='number'
              value={`${userInfo.age}`}
              onChange={handleInputChange}
            />
            <Input
              id='major'
              label='전공'
              placeholder='ex) 컴퓨터학부 글로벌소프트웨어융합전공'
              type='text'
              value={userInfo.major}
              onChange={handleInputChange}
            />
            <Input
              id='studentNumber'
              label='학번'
              placeholder='ex)2024111222'
              type='text'
              value={userInfo.studentNumber}
              onChange={handleInputChange}
            />
            <Input
              id='email'
              label='이메일'
              placeholder='ex) honggildong@gmail.com'
              type='text'
              value={userInfo.email}
              onChange={handleInputChange}
            />
          </MobileSubInfoContainer>
        ) : (
          <SubInfoContainer>
            <Input
              id='age'
              label='나이'
              placeholder='ex) 20'
              type='number'
              value={`${userInfo.age}`}
              onChange={handleInputChange}
            />
            <Input
              id='major'
              label='전공'
              placeholder='ex) 컴퓨터학부 글로벌소프트웨어융합전공'
              type='text'
              value={userInfo.major}
              onChange={handleInputChange}
            />
            <Input
              id='studentNumber'
              label='학번'
              placeholder='ex)2024111222'
              type='text'
              value={userInfo.studentNumber}
              onChange={handleInputChange}
            />
            <Input
              id='email'
              label='이메일'
              placeholder='ex) honggildong@gmail.com'
              type='text'
              value={userInfo.email}
              onChange={handleInputChange}
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
          onClick={handleSave}
        >
          저장하기
        </CompleteBtn>
      </ButtonContainer>
    </>
  );
};

export default MyPage;
