import styled from '@emotion/styled';

import SigninLogo from '@gdg/assets/SigninLogo.svg';
import Text from '@gdg/components/common/typography/Text';

interface IButton {
  width: string;
}

interface ISigninBtnProps {
  width: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = styled.button<IButton>`
  width: ${(props) => props.width};
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  border: none;
  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);
  cursor: pointer;

  background-color: var(--color-white);
  color: var(--color-black);
`;

const SigninBtn: React.FC<ISigninBtnProps> = ({ width, children, onClick }) => {
  return (
    <Button width={width} onClick={onClick}>
      <img src={SigninLogo} alt='logo' width='18px' height='18px' />
      <Text weight='bold' size='md' whiteSpace='nowrap'>
        {children}
      </Text>
    </Button>
  );
};

export default SigninBtn;
