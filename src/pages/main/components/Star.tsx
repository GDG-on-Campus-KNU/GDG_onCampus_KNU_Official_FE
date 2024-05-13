import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface StarProps {
  top: string;
  left: string;
}

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 3px 1px var(--color-white);
  }
  50% {
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 3px 1px var(--color-white);
  }
`;

const starStyle = (top: string, left: string) => css`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: var(--color-white);
  border-radius: 50%;
  animation:
    twinkling 3s infinite alternate,
    ${glowAnimation} 5s linear infinite;

  @keyframes twinkling {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  top: ${top};
  left: ${left};
`;

const StarContainer = styled.div<{ top: string; left: string }>`
  ${(props) => starStyle(props.top, props.left)}
`;

const Star = ({ top, left }: StarProps) => (
  <StarContainer top={top} left={left} />
);

export default Star;
