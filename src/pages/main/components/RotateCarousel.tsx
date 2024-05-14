import { useMediaQuery } from 'react-responsive';

import { useColTz } from '@gdsc/hooks/custom_hooks/useColTz';

import Earth from '@gdsc/assets/Earth.gif';
import LeftArrow from '@gdsc/assets/LeftArrow.svg';
import RightArrow from '@gdsc/assets/RightArrow.svg';

import { useCarouselStore } from '@gdsc/store/useCarouselStore';

import styled from '@emotion/styled';

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

const NotPCContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Card = styled.div`
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
  background: var(--color-white);
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 180%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const EarthImage = styled.img`
  width: 150%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RotateCarousel = () => {
  const { angle, setAngle, opacityArray, setOpacityArray } = useCarouselStore();
  const isNotPC = useMediaQuery({ query: '(max-width: 767px)' });
  const colTz = useColTz();
  const rotateAngle = 360 / 6;

  const handlePrevClick = () => {
    setAngle(angle - rotateAngle);
    rotateOpacityArray(false);
  };

  const handleNextClick = () => {
    setAngle(angle + rotateAngle);
    rotateOpacityArray(true);
  };

  const rotateOpacityArray = (isClockwise: boolean) => {
    const newOpacityArray = [...opacityArray];
    if (isClockwise) {
      const popped = newOpacityArray.pop();
      if (popped !== undefined) newOpacityArray.unshift(popped);
    } else {
      const shifted = newOpacityArray.shift();
      if (shifted !== undefined) newOpacityArray.push(shifted);
    }
    setOpacityArray(newOpacityArray);
  };

  return (
    <>
      {isNotPC ? (
        <NotPCContainer>
          <Scene>
            <EarthImage src={Earth} alt='earth' />
            <Carousel style={{ transform: `rotateY(${-angle}deg)` }}>
              {[...Array(6)].map((_, index) => (
                <Card
                  key={index}
                  style={{
                    transform: `rotateY(${rotateAngle * index}deg) translateZ(${colTz}px)`,
                    opacity: opacityArray[index],
                  }}
                >
                  Card{index + 1}
                </Card>
              ))}
            </Carousel>
          </Scene>
          <ButtonLayout>
            <Button onClick={handlePrevClick}>
              <img src={LeftArrow} alt='arrow' />
            </Button>
            <Button onClick={handleNextClick}>
              <img src={RightArrow} alt='arrow' />
            </Button>
          </ButtonLayout>
        </NotPCContainer>
      ) : (
        <Container>
          <Button onClick={handlePrevClick}>
            <img src={LeftArrow} alt='arrow' />
          </Button>
          <Scene>
            <EarthImage src={Earth} alt='earth' />
            <Carousel style={{ transform: `rotateY(${-angle}deg)` }}>
              {[...Array(6)].map((_, index) => (
                <Card
                  key={index}
                  style={{
                    transform: `rotateY(${rotateAngle * index}deg) translateZ(${colTz}px)`,
                    opacity: opacityArray[index],
                  }}
                >
                  Card{index + 1}
                </Card>
              ))}
            </Carousel>
          </Scene>
          <Button onClick={handleNextClick}>
            <img src={RightArrow} alt='arrow' />
          </Button>
        </Container>
      )}
    </>
  );
};

export default RotateCarousel;
