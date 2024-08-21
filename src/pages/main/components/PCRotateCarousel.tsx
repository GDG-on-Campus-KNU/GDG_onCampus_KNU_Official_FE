import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import Text from '@gdsc/components/common/typography/Text';

import { useColTz } from '@gdsc/hooks/useColTz';

import EarthWebM from '@gdsc/assets/Earth.webm';
import LeftArrow from '@gdsc/assets/LeftArrow.svg';
import RightArrow from '@gdsc/assets/RightArrow.svg';

import { useCarouselStore } from '@gdsc/store/useCarouselStore';

import { cardData } from './MainIntroduceText';
import {
  ArrowImg,
  Button,
  Card,
  CardMainText,
  Carousel,
  CompleteBtnWrapper,
  Container,
  ContentText,
  Scene,
  EarthVideo,
} from './RotateCarousel.style';

export interface RotateCarouselProps {
  handleNextClick: () => void;
  handlePrevClick: () => void;
  rotateAngle: number;
}

const PCRotateCarousel = ({
  handleNextClick,
  handlePrevClick,
  rotateAngle,
}: RotateCarouselProps) => {
  const { angle, opacityArray } = useCarouselStore();
  const colTz = useColTz();

  return (
    <Container>
      <Button onClick={handlePrevClick}>
        <ArrowImg src={LeftArrow} alt='arrow' />
      </Button>
      <Scene>
        <EarthVideo src={EarthWebM} autoPlay={true} muted={true} loop={true} />

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
              <Text weight='500' color='black' whiteSpace='normal' size='sm'>
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
              <CompleteBtnWrapper>
                <CompleteBtn
                  size='md'
                  type='button'
                  color='blue'
                  backgroundColor='blue'
                  hoverColor='blue'
                >
                  팀블로그 바로가기
                </CompleteBtn>
              </CompleteBtnWrapper>
            </Card>
          ))}
        </Carousel>
      </Scene>
      <Button onClick={handleNextClick}>
        <ArrowImg src={RightArrow} alt='arrow' />
      </Button>
    </Container>
  );
};

export default PCRotateCarousel;
