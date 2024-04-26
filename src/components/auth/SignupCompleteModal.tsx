import { displayCenter } from '../../styles/LayoutStyle';
import CompleteBtn from '../Button/CompleteBtn';
import Title from '../Typography/Title';
import { SigninWrapper, SigninBox } from '../common/AuthModal';
import logo from '/GDSC.svg';
import styled from '@emotion/styled';

const CompleteContainer = styled.div`
  height: 500px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const SigninModal = () => {
  return (
    <>
      <SigninWrapper>
        <SigninBox>
          <CompleteContainer>
            <img src={logo} alt='logo' width='40px' height='20px' />
            <Title color='var(--color-black)'>가입을 축하합니다!</Title>
            <CompleteBtn color='blue'>홈으로</CompleteBtn>
          </CompleteContainer>
        </SigninBox>
      </SigninWrapper>
    </>
  );
};

export default SigninModal;
