import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  size?: number;
};
export const Spinner = ({ size = 24 }: Props) => {
  return <Wrapper size={size} />;
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div<Pick<Props, 'size'>>`
  border: 4px solid rgba(177, 177, 177, 0.01);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border-left-color: #999;

  animation: ${spin} 1s linear infinite;
`;
