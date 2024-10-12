import styled from '@emotion/styled';

type CircleProps = {
  width: number;
  height: number;
  top: string;
  left: string;
  colorStart: string;
  colorEnd: string;
};

const InnerCircle = () => {
  return (
    <ThirdRound
      width={1130}
      height={1130}
      top='80%'
      left='50%'
      colorStart='#241a38'
      colorEnd='var(--color-revolver)'
    >
      <SecondRound
        width={1024}
        height={1024}
        top='50%'
        left='50%'
        colorStart='#2a2545'
        colorEnd='var(--color-revolver)'
      >
        <FirstRound
          width={888}
          height={888}
          top='50%'
          left='50%'
          colorStart='var(--color-navy)'
          colorEnd='var(--color-revolver)'
        />
      </SecondRound>
    </ThirdRound>
  );
};

export default InnerCircle;

// 공통 스타일 컴포넌트
const Circle = styled.div<CircleProps>`
  position: absolute;
  z-index: -2;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    ${(props) => props.colorStart},
    ${(props) => props.colorEnd}
  );
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);

  @media (max-width: 767px) {
    width: ${(props) => props.width * 0.77}px;
    height: ${(props) => props.height * 0.77}px;
  }

  @media (max-width: 500px) {
    width: ${(props) => props.width * 0.54}px;
    height: ${(props) => props.height * 0.54}px;
  }
`;

const ThirdRound = styled(Circle)`
  top: ${(props) => props.top};

  @media (max-width: 767px) {
    top: 70%;
  }

  @media (max-width: 500px) {
    top: 45%;
  }
`;
const SecondRound = styled(Circle)``;
const FirstRound = styled(Circle)``;
