import styled from '@emotion/styled';

interface IText {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | string;
  color?: 'white' | 'black' | 'placeholder' | string;
  weight?: 'light' | 'normal' | 'bold' | string;
  children?: React.ReactNode;
}

const Text = styled.span<IText>`
  font-weight: ${(props) => props.weight ?? 'normal'};

  color: ${(props) => props.color};

  font-size: ${(props) => {
    switch (props.size) {
      case 'xs':
        return 'var(--font-size-xs)';
      case 'sm':
        return 'var(--font-size-sm)';
      case 'md':
        return 'var(--font-size-md)';
      case 'lg':
        return 'var(--font-size-lg)';
      case 'xl':
        return 'var(--font-size-xl)';
      case undefined:
        return 'var(--font-size-md)';
      default:
        return props.size;
    }
  }};

  font-family: 'Noto+Sans';

  white-space: pre-line;
`;

export default Text;
