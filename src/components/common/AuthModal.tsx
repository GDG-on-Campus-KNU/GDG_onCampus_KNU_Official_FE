import Text from '../Typography/Text';
import Title from '../Typography/Title';
import logo from '/GDSC.svg';
import styled from '@emotion/styled';

interface ISignModal {
  title: string;
  text: string;
  children: React.ReactNode;
}

export const SigninWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const SigninBox = styled.div`
  width: 60%;

  padding: 35px;

  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  background-color: var(--color-white);
  opacity: 80%;

  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);

  z-index: 1000;
`;

const SigninContainer = styled.div`
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: auto;
  }

  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;

const TitleItem = styled.div`
  margin: 50px 0px;
  @media (max-width: 767px) {
    margin: 30px 0px;
  }
`;

const AuthModal: React.FC<ISignModal> = ({ title, text, children }) => {
  return (
    <SigninWrapper>
      <SigninBox>
        <SigninContainer>
          <img src={logo} alt='logo' width='80px' height='40px' />
          <TitleItem>
            <Title color='var(--color-black)'>{title}</Title>
          </TitleItem>
          <Text color='var(--color-black)' size='md'>
            {text}
          </Text>
        </SigninContainer>
        <SigninContainer>{children}</SigninContainer>
      </SigninBox>
    </SigninWrapper>
  );
};

export default AuthModal;
