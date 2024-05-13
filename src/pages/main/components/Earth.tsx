import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import LeftArrow from '@gdsc/assets/LeftArrow.svg';
import RightArrow from '@gdsc/assets/RightArrow.svg';

import { useCarouselStore } from '@gdsc/store/useCarouselStore';

import styled from '@emotion/styled';

interface CardProps {
  isDark: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  font-size: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const Scene = styled.div`
  width: 210px;
  height: 200px;
  position: relative;
  perspective: 1400px;
  perspective-origin: center -200%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 190px;
    height: 180px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 150px;
  }
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s;
`;

const Card = styled.div<CardProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  font-size: 24px;
  color: #000;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  background-color: ${(props) =>
    props.isDark
      ? 'var(--color-dove)'
      : 'var(--color-white)'}; /* 어두운 배경색 또는 흰색 설정 */
`;

const Earth = () => {
  const { angle, setAngle, isDragging, setIsDragging } = useCarouselStore();
  const prevX = useRef<number>(0);
  const isNotPC = useMediaQuery({ query: '(max-width: 767px)' });

  const rotateAngle = 360 / 6;
  const sensitivity = 0.2;

  let colTz = Math.round(
    236 / 2 / Math.tan((rotateAngle / 2) * (Math.PI / 250))
  );

  if (window.innerWidth <= 768 && window.innerWidth > 500) {
    colTz = Math.round(
      236 / 2 / Math.tan((rotateAngle / 1.6) * (Math.PI / 250))
    );
  } else if (window.innerWidth <= 500) {
    colTz = Math.round(
      236 / 2 / Math.tan((rotateAngle / 1.3) * (Math.PI / 250))
    );
  }

  const handlePrevClick = () => {
    setAngle(angle - rotateAngle);
  };

  const handleNextClick = () => {
    setAngle(angle + rotateAngle);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    prevX.current = e.clientX;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    if (isDragging) {
      const deltaX = (e.clientX - prevX.current) * sensitivity;
      prevX.current = e.clientX;
      setAngle(angle + deltaX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Container>
      {isNotPC ? null : (
        <Button onClick={handlePrevClick}>
          <img src={LeftArrow} alt='arrow' />
        </Button>
      )}
      <Scene
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Carousel style={{ transform: `rotateY(${-angle}deg)` }}>
          <Card
            style={{ transform: `rotateY(0deg) translateZ(${colTz}px)` }}
            isDark={false}
          >
            Card1
          </Card>
          <Card
            style={{
              transform: `rotateY(${rotateAngle}deg) translateZ(${colTz}px)`,
            }}
            isDark={false}
          >
            Card2
          </Card>
          <Card
            style={{
              transform: `rotateY(${rotateAngle * 2}deg) translateZ(${colTz}px)`,
            }}
            isDark={true}
          >
            Card3
          </Card>
          <Card
            style={{
              transform: `rotateY(${rotateAngle * 3}deg) translateZ(${colTz}px)`,
            }}
            isDark={true}
          >
            Card4
          </Card>
          <Card
            style={{
              transform: `rotateY(${rotateAngle * 4}deg) translateZ(${colTz}px)`,
            }}
            isDark={true}
          >
            Card5
          </Card>
          <Card
            style={{
              transform: `rotateY(${rotateAngle * 5}deg) translateZ(${colTz}px)`,
            }}
            isDark={false}
          >
            Card6
          </Card>
        </Carousel>
      </Scene>
      {isNotPC ? null : (
        <Button onClick={handleNextClick}>
          <img src={RightArrow} alt='arrow' />
        </Button>
      )}
    </Container>
  );
};

export default Earth;
