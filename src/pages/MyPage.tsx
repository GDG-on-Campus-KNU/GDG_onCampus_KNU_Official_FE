import Input from '@gdsc/components/form/Input';
import TextArea from '@gdsc/components/form/TextArea';

import { PageWrapper } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const MyPageWrapper = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;

  margin: 35px 0px 0px 0px;

  padding: 10px 30px;
  border-radius: 12px;

  background-color: #1a122b;
`;

const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MyPageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

const MyPage = () => {
  return (
    <>
      <PageWrapper>
        <MyPageWrapper>
          <MyPageContainer>
            프로필 자리
            <MyPageColumn>
              <Input
                id='name'
                title='이름'
                type='text'
                placeholder='ex) 홍길동'
              />
              <Input
                id='team'
                title='소속팀'
                type='text'
                placeholder='FE study 2팀'
              />
            </MyPageColumn>
          </MyPageContainer>
        </MyPageWrapper>

        <MyPageWrapper>
          <TextArea
            id='introduction'
            title='자기소개'
            placeholder='자기소개를 500자 이내로 입력해주세요.'
          />
          <MyPageContainer>
            <MyPageColumn>
              <Input id='age' title='나이' type='text' placeholder='ex) 20' />
              <Input
                id='major'
                title='전공'
                type='text'
                placeholder='ex) 컴퓨터학부 글로벌소프트웨어융합전공'
              />
            </MyPageColumn>
            <MyPageColumn>
              <Input
                id='studentnumber'
                title='학번'
                type='text'
                placeholder='ex) 2024111222'
              />
              <Input
                id='email'
                title='이메일'
                type='text'
                placeholder='ex) honggildong@gmail.com'
              />
            </MyPageColumn>
          </MyPageContainer>
        </MyPageWrapper>
      </PageWrapper>
    </>
  );
};

export default MyPage;
