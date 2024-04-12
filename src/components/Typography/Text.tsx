import styled from '@emotion/styled';

interface IText {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: 'white' | 'black' | 'placeholder' | string;
  weight?: 'light' | 'normal' | 'bold' | string;
  children?: React.ReactNode;
}

const Text = styled.span<IText>`
  @media (max-width: 767px) {
    text-align: center;
  }

  font-weight: ${(props) => props.weight ?? 'normal'};

  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return 'var(--color-white)';
      case 'black':
        return 'var(--color-black)';
      case 'placeholder':
        return 'var(--color-dove)';
      default:
        return props.color;
    }
  }};

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
      case 'xxl':
        return 'var(--font-size-xxl)';
      case undefined:
        return 'var(--font-size-md)';
      default:
        return;
    }
  }};

  font-family: 'Noto+Sans';

  white-space: pre-line;
`;

export default Text;
