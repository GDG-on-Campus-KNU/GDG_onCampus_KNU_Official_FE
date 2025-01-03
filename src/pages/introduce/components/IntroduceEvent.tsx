import styled from '@emotion/styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import Text from '@gdg/components/common/typography/Text';
import { GDSCText, IntroText } from '@gdg/styles/IntroduceStyle';
import { displayCenter } from '@gdg/styles/LayoutStyle';

gsap.registerPlugin(ScrollTrigger);

const IntroBox = styled.div`
  width: 100%;
  height: 156px;
  padding: 72px 0 75px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
`;

const IntroductionBox = styled.div`
  ${displayCenter}
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 33px;
  margin-top: 16px;

  @media (max-width: 500px) {
    height: 25px;
  }
`;

const IntroTableBox = styled.div`
  margin-top: 80px;
`;

const IntroduceEvent = () => {
  useEffect(() => {
    gsap.to('.animate', {
      scrollTrigger: {
        trigger: '.animate',
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play reverse none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <IntroBox className='animate'>
      <Text color='white' weight='600' size='xs'>
        WITH
      </Text>
      <IntroductionBox>
        <GDSCText>Introduction of GDGoC KNU Core Members</GDSCText>
      </IntroductionBox>
      <IntroTableBox>
        <IntroText>
          GDG on Campus KNU를 이끌어가는 운영진 멤버들을 소개합니다.
        </IntroText>
      </IntroTableBox>
    </IntroBox>
  );
};

export default IntroduceEvent;
