import Text from '@gdsc/components/typography/Text';

import { AuthBox } from '@gdsc/styles/AuthModalStyle';
import { displayCenter } from '@gdsc/styles/LayoutStyle';

import logo from '../../../public/GDSC.svg';
import styled from '@emotion/styled';

interface ISignModal {
  title: string;
  text?: string;
  children: React.ReactNode;
  isLogin?: string;
}

const TitleContainer = styled.h2`
  ${displayCenter}
  flex-direction: column;
  align-items: center;

  gap: 20px;

  padding: 0px;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  width: 70%;
  @media (max-width: 600px) {
    width: 100%;
  }
  ${displayCenter}
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const GotoSignupBtn = styled.button`
  background-color: transparent;
  color: var(--color-white);

  border: none;

  text-decoration: underline;
  font-family: 'Noto+Sans';
  font-size: var(--font-size-sm);

  &:hover {
    cursor: pointer;
  }
`;

const AuthModal: React.FC<ISignModal> = ({
  title,
  text,
  children,
  isLogin,
}) => {
  return (
    <AuthBox variant='primary'>
      <TitleContainer>
        <img src={logo} alt='logo' width='50px' height='25px' />
        <Text color='white' size='xl' weight='bold' whiteSpace='nowrap'>
          {title}
        </Text>
        {text ? (
          <Text color='white' size='sm'>
            {text}
          </Text>
        ) : null}
      </TitleContainer>
      <ButtonContainer>
        {children}
        {isLogin ? (
          <GotoSignupBtn>아직 GDSC 계정이 없다면?</GotoSignupBtn>
        ) : null}
      </ButtonContainer>
    </AuthBox>
  );
};

//title: GDSC 로그인
//text: Google 계정을 이용하여 GDSC knu에 로그인하세요
//children: 로그인버튼 컴포넌트

export default AuthModal;
