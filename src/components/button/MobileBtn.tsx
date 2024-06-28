import styled from '@emotion/styled';
import { IButton } from '@gdsc/interface/ButtonInterfaces';

const LoginButton = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  border: 0;
  border-radius: 8px;

  font-size: ${(props) => {
    switch (props.size) {
      case 'xxl':
        return 'var(--font-size-xxl)';
      case 'xl':
        return 'var(--font-size-xl)';
      case 'lg':
        return 'var(--font-size-lg)';
      case 'md':
        return 'var(--font-size-md)';
      case 'sm':
        return 'var(--font-size-sm)';
      case 'xs':
        return 'var(--font-size-xs)';
      default:
        return 'var(--font-size-md)';
    }
  }};

  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'transparent':
        return 'rgba(255,255,255,0.3)';
      default:
        return props.backgroundColor;
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'var(--color-white)';
      case 'navy':
        return 'var(--color-white)';
      case 'white':
        return 'var(--color-white)';
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.hoverColor) {
        case 'blue':
          return 'var(--color-navy)';
        case 'navy':
          return 'var(--color-black)';
        case 'white':
          return 'var(--color-dove)';
        case 'none':
          return 'none';
        default:
          return 'none';
      }
    }};
  }
`;

const MobileBtn: React.FC<IButton> = ({
  color,
  backgroundColor,
  hoverColor,
  children,
  type,
  size,
  ...rest
}) => {
  return (
    <LoginButton
      color={color}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      type={type}
      size={size}
      {...rest}
    >
      {children}
    </LoginButton>
  );
};

export default MobileBtn;
