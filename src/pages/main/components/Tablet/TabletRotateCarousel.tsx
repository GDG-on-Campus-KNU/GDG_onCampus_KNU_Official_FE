import styled from '@emotion/styled';
import EarthWebM from '@gdg/assets/Earth.webm';
import LeftArrow from '@gdg/assets/LeftArrow.svg';
import RightArrow from '@gdg/assets/RightArrow.svg';
import CompleteBtn from '@gdg/components/common/button/CompleteBtn';
import Text from '@gdg/components/common/typography/Text';
import { useColTz } from '@gdg/hooks/useColTz';
import { useCarouselStore } from '@gdg/store/useCarouselStore';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import { cardData } from '../MainIntroduceText';
import { RotateCarouselProps } from '../PCRotateCarousel';
import {
  ArrowImg,
  Button,
  Card,
  CardMainText,
  Carousel,
  CompleteBtnWrapper,
  ContentText,
  Scene,
  EarthVideo,
} from '../RotateCarousel.style';

const TabletRotateCarousel = ({
  handleNextClick,
  handlePrevClick,
  rotateAngle,
}: RotateCarouselProps) => {
  const { angle, opacityArray } = useCarouselStore();
  const colTz = useColTz();

  const carouselTransform = `rotateY(${-angle}deg)`;

  return (
    <NotPCContainer>
      <Scene>
        <EarthVideo src={EarthWebM} autoPlay={true} muted={true} loop={true} />
        <Carousel style={{ transform: carouselTransform }}>
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
                size='xs'
              >
                {cardData[index].mainText}
              </CardMainText>
              <Text weight='500' color='black' whiteSpace='normal' size='xxs'>
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
                size='xxs'
                weight='500'
                whiteSpace='normal'
              >
                {cardData[index].contentText}
              </MobileContentText>
              <CompleteBtnWrapper>
                <Link to='/techblog'>
                  <CompleteBtn
                    size='xxs'
                    type='button'
                    color='blue'
                    backgroundColor='blue'
                    hoverColor='blue'
                  >
                    팀블로그 바로가기
                  </CompleteBtn>
                </Link>
              </CompleteBtnWrapper>
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
  );
};

const MemoizedTabletRotateCarousel = memo(TabletRotateCarousel);
MemoizedTabletRotateCarousel.displayName = 'TabletRotateCarousel';

export default MemoizedTabletRotateCarousel;

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

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 170%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const MobileContentText = styled(ContentText)`
  padding: 10px;
  width: calc(100% - 20px);
`;
