import Text from '../Typography/Text';
import styled from '@emotion/styled';

import SigninLogo from '../../assets/SigninLogo.svg';

interface IButton {
  width: string;
}

interface ISigninBtnProps {
  width: string;
  children: React.ReactNode;
}

const Button = styled.button<IButton>`
  width: ${(props) => props.width};
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  margin: auto;

  border: none;
  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);

  background-color: var(--color-white);
  color: var(--color-black);
`;

const SigninBtn: React.FC<ISigninBtnProps> = ({ width, children }) => {
  return (
    <Button width={width}>
      <img src={SigninLogo} alt='logo' width='1.125rem' height='18px' />
      <Text weight='500' size='18px'>
        {children}
      </Text>
    </Button>
  );
};

export default SigninBtn;
