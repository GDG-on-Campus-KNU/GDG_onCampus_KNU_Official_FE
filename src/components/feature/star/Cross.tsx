import { motion } from 'framer-motion';

import styled from '@emotion/styled';

// CrossShape 컴포넌트에 top과 left를 props로 전달받도록 설정
interface CrossShapeProps {
  top: string;
  left: string;
}

const CrossShape = ({ top, left }: CrossShapeProps) => {
  return (
    <MotionCrossShape
      top={top}
      left={left}
      animate={{
        scale: [1, 0.5, 1],
        boxShadow: [
          '0 0 9px 3px var(--color-selective)',
          '0 0 18px 6px rgba(255, 255, 255, 0.7)',
        ],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  );
};

const MotionCrossShape = styled(motion.div)<{ top: string; left: string }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #ffc838;
  border-radius: 50%;

  top: ${(props) => props.top};
  left: ${(props) => props.left};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #ffc838;
    border-radius: 50%;
  }

  /* 세로 팔 */
  &::before {
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 16px;
  }

  /* 가로 팔 */
  &::after {
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 6px;
  }
`;

export default CrossShape;
