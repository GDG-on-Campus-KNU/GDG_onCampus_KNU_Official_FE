import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import axios from 'axios';

import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import Input from '@gdsc/components/common/form/Input';
import Profile from '@gdsc/components/common/form/Profile';
import TextArea from '@gdsc/components/common/form/TextArea';
import PageTitle from '@gdsc/components/common/title/PageTitle';

import TeamToken from '@gdsc/pages/mypage/components/TeamToken';

import { useUserInfo } from '@gdsc/apis/hooks/mypage/useUserInfo';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 50px 0px 100px 0px;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

interface IUserInfo {
  name: string;
  age: number;
  major: string;
  studentNumber: string;
  email: string;
  teamInfos: string[];
}

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    name: '',
    age: 0,
    major: '',
    studentNumber: '',
    email: '',
    teamInfos: [],
  });

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const accessToken = localStorage.getItem('accessToken');
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useUserInfo(accessToken);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const updateUserMutation = useMutation({
    mutationFn: (updatedInfo: IUserInfo) =>
      axios.put('http://43.202.198.49:8080/api/user', updatedInfo, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
      alert('정보가 성공적으로 저장되었습니다.');
    },
    onError: (error: string) => {
      console.error('정보 저장 중 오류가 발생했습니다:', error);
      alert('정보 저장에 실패했습니다.');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [id]: id === 'age' ? parseInt(value) : value,
    }));
  };

  const handleSave = () => {
    updateUserMutation.mutate(userInfo);
  };

  if (isLoading) {
    console.log('loading...');
  }
  if (isError) {
    console.log('사용자 정보를 가져오는 중 에러가 발생했습니다.');
  }

  // const teamInfo = [
  //   'FE study 2팀',
  //   'Solution Challenge 3팀',
  //   '2차 프로젝트 1팀',
  //   'FE study 2팀',
  // ];

  return (
    <>
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
              {userInfo.teamInfos.map((e, i) => {
                return <TeamToken key={`${e}-${i}`} teamname={e} />;
              })}
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
