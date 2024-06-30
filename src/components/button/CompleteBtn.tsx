import styled from '@emotion/styled';
import { IButton } from '@gdsc/interface/ButtonInterfaces';

interface ICButton extends IButton {
  onClick?: () => void;
}

const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  border: 0;
  border-radius: 12px;

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

  font-weight: bold;

  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'blue':
        return 'var(--color-blue)';
      case 'navy':
        return 'var(--color-navy)';
      case 'white':
        return 'var(--color-white)';
      case 'gray':
        return 'var(--color-alto)';
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'var(--color-white)';
      case 'navy':
        return 'var(--color-white)';
      case 'white':
        return 'var(--color-black)';
      case 'gray':
        return 'var(--color-dove)';
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
      }
    }};
  }
`;

const CompleteBtn: React.FC<ICButton> = ({
  color,
  backgroundColor,
  hoverColor,
  children,
  size,
  type,
  onClick,
}) => {
  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      type={type}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CompleteBtn;
