import { useEffect, useRef } from 'react';

import gsap from 'gsap';

import RotateCarousel from '@gdsc/pages/main/components/RotateCarousel';

import styled from '@emotion/styled';

const FirstRound = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    var(--color-navy),
    var(--color-revolver)
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 767px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const SecondRound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #2a2545, var(--color-revolver));

  @media (max-width: 767px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 500px) {
    width: 400px;
    height: 400px;
  }
`;

const ThirdRound = styled.div`
  position: relative;
  margin-top: 165px;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #241a38, var(--color-revolver));

  @media (max-width: 767px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 500px) {
    width: 436px;
    height: 436px;
  }
`;

const MainRound = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      duration: 2.5,
      opacity: 0,
      y: 10,
      ease: 'easeInOut',
      delay: 2,
    });
  }, []);

  return (
    <ThirdRound>
      <SecondRound>
        <FirstRound ref={imageRef}>
          <RotateCarousel />
        </FirstRound>
      </SecondRound>
    </ThirdRound>
  );
};

export default MainRound;
