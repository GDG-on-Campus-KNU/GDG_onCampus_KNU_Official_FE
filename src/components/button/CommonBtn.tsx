import styled from '@emotion/styled';
import { ICButton } from '@gdsc/interface/ButtonInterfaces';

const Button = styled.button<ICButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 12px;

  padding: ${({ padding }) => padding || '10px 20px'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

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

  @media (max-width: 767px) {
    width: ${({ mdWidth }) => mdWidth || 'auto'};
    height: ${({ mdHeight }) => mdHeight || 'auto'};
    padding: ${({ mPadding }) => mPadding || '5px 10px'};
    font-size: ${(props) => {
      switch (props.mdSize) {
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
  }

  @media (max-width: 500px) {
    border-radius: 8px;
    width: ${({ mWidth }) => mWidth || 'auto'};
    height: ${({ mHeight }) => mHeight || 'auto'};
    padding: ${({ mPadding }) => mPadding || '5px 10px'};
    font-size: ${(props) => {
      switch (props.mSize) {
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
  }
`;

const CommonBtn = ({
  color,
  backgroundColor,
  hoverColor,
  size,
  padding,
  width,
  height,
  mdWidth,
  mdHeight,
  mdSize,
  mWidth,
  mHeight,
  mPadding,
  mSize,
  children,
  type,
  onClick,
}: ICButton) => {
  return (
    <Button
      width={width}
      height={height}
      mdWidth={mdWidth}
      mdHeight={mdHeight}
      mdSize={mdSize}
      mWidth={mWidth}
      mHeight={mHeight}
      color={color}
      size={size}
      mSize={mSize}
      padding={padding}
      mPadding={mPadding}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CommonBtn;
