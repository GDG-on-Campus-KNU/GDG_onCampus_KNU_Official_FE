import Text from '@gdsc/components/typography/Text';
import Title from '@gdsc/components/typography/Title';

import { AuthBox } from '@gdsc/styles/AuthModalStyle';

import logo from '../../../public/GDSC.svg';
import styled from '@emotion/styled';

interface ISignModal {
  title: string;
  text: string;
  children: React.ReactNode;
}

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
    <AuthBox>
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
    </AuthBox>
  );
};

export default AuthModal;
