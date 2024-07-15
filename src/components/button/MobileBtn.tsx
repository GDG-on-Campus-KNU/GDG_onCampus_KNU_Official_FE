import styled from '@emotion/styled';
import { IButton } from '@gdsc/types/ButtonInterfaces';

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
      case 'blue':
        return 'var(--color-blue)';
      case 'gray':
        return 'var(--color-alto)';
      case 'red':
        return 'var(--color-red)';
      case 'yellow':
        return 'var(--color-selective)';
      case 'navy':
        return 'var(--color-navy)';
      case 'white':
        return 'var(--color-white)';
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'var(--color-white)';
      case 'gray':
        return 'var(--color-dove)';
      case 'red':
        return 'var(--color-white)';
      case 'yellow':
        return 'var(--color-white)';
      case 'navy':
        return 'var(--color-white)';
      case 'white':
        return 'var(--color-black)';
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.hoverColor) {
        case 'blue':
          return 'var(--color-denim)';
        case 'gray':
          return 'var(--color-platinum)';
        case 'red':
          return 'var(--color-brick)';
        case 'yellow':
          return 'var(--color-golden)';
        case 'navy':
          return 'var(--color-white)';
        case 'white':
          return 'var(--color-alto)';
      }
    }};

    color: ${(props) => {
      switch (props.color) {
        case 'blue':
          return 'var(--color-silver)';
        case 'gray':
          return 'var(--color-battleship )';
        case 'red':
          return 'var(--color-silver)';
        case 'yellow':
          return 'var(--color-silver)';
        case 'navy':
          return 'var(--color-midnight)';
        case 'white':
          return 'var(--color-white)';
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
