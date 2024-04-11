import Text from '../Typography/Text';
import Title from '../Typography/Title';
import logo from '/GDSC.svg';
import styled from '@emotion/styled';

interface ISignModal {
  title: string;
  text: string;
  children: React.ReactNode;
}

const SigninWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const SigninBox = styled.div`
  width: 60%;

  padding: 35px;

  display: flex;
  justify-content: space-between;

  background-color: var(--color-white);
  opacity: 80%;

  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);
`;

const SigninContainer = styled.div`
  width: 50%;
  height: 500px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TitleItem = styled.div`
  margin: 50px 0px;
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
          <Text color='var(--color-black)' size='lg'>
            {text}
          </Text>
        </SigninContainer>
        <SigninContainer>{children}</SigninContainer>
      </SigninBox>
    </SigninWrapper>
  );
};

export default AuthModal;
