import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import Text from '@gdsc/components/typography/Text';

import SpaceShip from '@gdsc/assets/SpaceShip.svg';

import styled from '@emotion/styled';

const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 100px 0px 60px;
  width: 100%;
  height: 300px;
  width: calc(100% - 160px);
  z-index: 300;

  @media (max-width: 767px) {
    padding: 0 60px 0 60px;
    width: calc(100% - 120px);
  }

  @media (max-width: 500px) {
    padding: 0 30px 0 30px;
    width: calc(100% - 60px);
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
`;

const MainSubText = styled(Text)`
  @media (max-width: 767px) {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const MainText = styled(Text)`
  @media (max-width: 767px) {
    font-size: var(--font-size-mxl);
  }
  @media (max-width: 500px) {
    font-size: 20px;
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
          우리는 GDSC KNU 입니다!
        </MainText>
      </TextLayout>
      <ImgLayout ref={imageRef}>
        <a
          href='https://sites.google.com/view/gdeveloperskorea/gdsc'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SpaceShipImg src={SpaceShip} alt='GDSC' />
        </a>
        <Text color='white' size='sm' weight='700'>
          GDSC KOREA
        </Text>
      </ImgLayout>
    </ContentLayout>
  );
};

export default Content;
