import { useMediaQuery } from 'react-responsive';

import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import Text from '@gdsc/components/typography/Text';

import { useColTz } from '@gdsc/hooks/custom_hooks/useColTz';

import Earth from '@gdsc/assets/Earth.gif';
import LeftArrow from '@gdsc/assets/LeftArrow.svg';
import RightArrow from '@gdsc/assets/RightArrow.svg';

import { useCarouselStore } from '@gdsc/store/useCarouselStore';

import { cardData } from './MainIntroduceText';
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
    width: 180px;
    height: 170px;
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
  color: var(--color-black);
  font-weight: bold;
  display: flex;
  flex-direction: column;
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

const CardMainText = styled(Text)`
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 40%;
    background: var(--color-selective);
    z-index: -1;
  }

  @media (max-width: 500px) {
    ::before {
      top: 5px;
    }
  }
`;

const ContentText = styled(Text)`
  padding: 20px;
  width: calc(100% - 40px);
`;

const MobileContentText = styled(ContentText)`
  padding: 10px;
  width: calc(100% - 20px);
`;

const ArrowImg = styled.img`
  width: 57px;
  height: 57px;

  @media (max-width: 767px) {
    width: 47px;
    height: 47px;
  }
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
                  <CardMainText
                    weight='700'
                    color='black'
                    whiteSpace='normal'
                    size='sm'
                  >
                    {cardData[index].mainText}
                  </CardMainText>
                  <Text
                    weight='500'
                    color='black'
                    whiteSpace='normal'
                    size='xs'
                  >
                    {cardData[index].subText}
                  </Text>
                  <hr
                    style={{
                      width: '80%',
                      height: '1px',
                      backgroundColor: 'black',
                      margin: '0 auto',
                    }}
                  />
                  <MobileContentText
                    color='black'
                    size='xs'
                    weight='500'
                    whiteSpace='normal'
                  >
                    {cardData[index].contentText}
                  </MobileContentText>
                  <CompleteBtn
                    size='md'
                    type='button'
                    color='blue'
                    backgroundColor='blue'
                    hoverColor='blue'
                  >
                    팀블로그 바로가기
                  </CompleteBtn>
                </Card>
              ))}
            </Carousel>
          </Scene>
          <ButtonLayout>
            <Button onClick={handlePrevClick}>
              <ArrowImg src={LeftArrow} alt='arrow' />
            </Button>
            <Button onClick={handleNextClick}>
              <ArrowImg src={RightArrow} alt='arrow' />
            </Button>
          </ButtonLayout>
        </NotPCContainer>
      ) : (
        <Container>
          <Button onClick={handlePrevClick}>
            <ArrowImg src={LeftArrow} alt='arrow' />
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
                  <CardMainText
                    weight='700'
                    color='black'
                    whiteSpace='normal'
                    size='lg'
                  >
                    {cardData[index].mainText}
                  </CardMainText>
                  <Text
                    weight='500'
                    color='black'
                    whiteSpace='normal'
                    size='sm'
                  >
                    {cardData[index].subText}
                  </Text>
                  <hr
                    style={{
                      width: '80%',
                      height: '1px',
                      backgroundColor: 'black',
                      margin: '0 auto',
                    }}
                  />
                  <ContentText
                    color='black'
                    size='xs'
                    weight='500'
                    whiteSpace='normal'
                  >
                    {cardData[index].contentText}
                  </ContentText>
                  <CompleteBtn
                    size='md'
                    type='button'
                    color='blue'
                    backgroundColor='blue'
                    hoverColor='blue'
                  >
                    팀블로그 바로가기
                  </CompleteBtn>
                </Card>
              ))}
            </Carousel>
          </Scene>
          <Button onClick={handleNextClick}>
            <ArrowImg src={RightArrow} alt='arrow' />
          </Button>
        </Container>
      )}
    </>
  );
};

export default RotateCarousel;
