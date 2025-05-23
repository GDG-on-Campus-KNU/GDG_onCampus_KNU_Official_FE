import styled from '@emotion/styled';

interface IText {
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'mxl'
    | 'xl'
    | 'sxl'
    | 'mxl'
    | 'xxl';
  color?: 'white' | 'black' | 'placeholder' | string;
  weight?: 'light' | 'normal' | 'bold' | string;
  whiteSpace?: 'nowrap' | 'normal' | 'pre-line';
  children?: React.ReactNode;
}

const Text = styled.span<IText>`
  /* @media (max-width: 767px) {
    text-align: center;
  } */
  display: inline;
  font-display: swap;

  font-weight: ${(props) => props.weight ?? 'normal'};

  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return 'var(--color-white)';
      case 'black':
        return 'var(--color-black)';
      case 'placeholder':
        return 'var(--color-dove)';
      case 'yellow':
        return 'var(--color-selective)';
      default:
        return props.color;
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case 'xxs':
        return 'var(--font-size-xxs)';
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
      case 'sxl':
        return 'var(--font-size-sxl)';
      case 'mxl':
        return 'var(--font-size-mxl)';
      case 'xxl':
        return 'var(--font-size-xxl)';
      case undefined:
        return 'var(--font-size-md)';
      default:
        return;
    }
  }};

  white-space: ${(props) => {
    switch (props.whiteSpace) {
      case 'nowrap':
        return 'nowrap';
      case 'normal':
        return 'normal';
      default:
        return 'pre-line';
    }
  }};

  word-break: break-all;
`;

export default Text;
