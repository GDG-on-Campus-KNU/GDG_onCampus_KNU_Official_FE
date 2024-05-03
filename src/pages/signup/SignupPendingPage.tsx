import logo from '../../../public/GDSC.svg';
import styled from '@emotion/styled';
import { AuthWrapper, AuthBox } from '@gdsc/styles/AuthModalStyle';
import { displayCenter } from '@gdsc/styles/LayoutStyle';

import CompleteBtn from '@gdsc/components/CompleteBtn';
import Title from '@gdsc/components/Title';

const CompleteContainer = styled.div`
  height: 500px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const SignupPendingPage = () => {
  return (
    <>
      <AuthWrapper>
        <AuthBox>
          <CompleteContainer>
            <img src={logo} alt='logo' width='40px' height='20px' />
            <Title color='var(--color-black)'>가입을 축하합니다!</Title>
            <Title color='var(--color-black)'>
              운영진의 승인이 필요합니다.
            </Title>
            <CompleteBtn type='button' color='blue'>
              홈으로
            </CompleteBtn>
          </CompleteContainer>
        </AuthBox>
      </AuthWrapper>
    </>
  );
};

export default SignupPendingPage;
