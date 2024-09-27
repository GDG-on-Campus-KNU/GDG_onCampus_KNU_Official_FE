import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import styled from '@emotion/styled';
import SpaceShip from '@gdg/assets/SpaceShip.svg';
import Text from '@gdg/components/common/typography/Text';

const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 62px 0px 62px;
  width: calc(100% - 124px);
  margin-top: 105px;
  z-index: 300;

  @media (max-width: 500px) {
    margin-top: 100px;
    padding: 0 32px 0 32px;
    width: calc(100% - 63px);
  }
`;

const SpaceShipImg = styled.img`
  width: 70px;
  height: 68.77px;
  margin-bottom: 8px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 57px;
    height: 56px;
  }

  @media (max-width: 500px) {
    width: 45px;
    height: 44.21px;
  }
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLayout = styled(TextLayout)`
  align-items: center;
  margin-left: 40px;
  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;

const MainSubText = styled(Text)`
  @media (max-width: 767px) {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const MainText = styled(Text)`
  @media (max-width: 767px) {
    font-size: var(--font-size-mxl);
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const Content = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'easeInOut',
      delay: 0.5,
    });

    gsap.from(imageRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'easeInOut',
      delay: 1,
    });
  }, []);

  return (
    <ContentLayout>
      <TextLayout ref={textRef}>
        <MainSubText color='white' size='mxl' weight='300'>
          안녕하세요.
        </MainSubText>
        <MainText color='white' size='xxl' weight='700'>
          우리는 GDG on Campus KNU 입니다!
        </MainText>
      </TextLayout>
      <ImgLayout ref={imageRef}>
        <a
          href='https://sites.google.com/view/gdeveloperskorea/gdg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SpaceShipImg src={SpaceShip} alt='GDSC' />
        </a>
        <Text color='white' size='xs' weight='700'>
          GDG KOREA
        </Text>
      </ImgLayout>
    </ContentLayout>
  );
};

export default Content;
