import styled from '@emotion/styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import Text from '@gdg/components/common/typography/Text';
import { GDSCText, IntroText } from '@gdg/styles/IntroduceStyle';
import { displayCenter } from '@gdg/styles/LayoutStyle';

gsap.registerPlugin(ScrollTrigger);

const AboutLayout = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 338px;
`;

const GdscTextBox = styled.div`
  margin-top: 10px;
`;

const AboutTextBox = styled.div`
  width: 50%;
  height: 44px;
  margin-top: 76px;
  display: flex;
  text-align: center;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const AboutEvent = () => {
  useEffect(() => {
    gsap.to('.about-layout', {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
    gsap.from('.gdsc-text-box', {
      opacity: 0,
      y: -10,
      duration: 1,
      delay: 1,
    });
    gsap.from('.about-text-box', {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <AboutLayout className='about-layout'>
      <Text color='white' weight='600' size='xs'>
        ABOUT
      </Text>
      <GdscTextBox className='gdsc-text-box'>
        <GDSCText>Google Developer Groups on Campus KNU</GDSCText>
      </GdscTextBox>
      <AboutTextBox className='about-text-box'>
        <IntroText>
          GDG on Campus KNU는 학생들이 개발/리더십 능력을 키울 수 있도록
          지원하는 프로그램으로, 성장을 원하는 다양한 학생 개발자들을 기다리고
          있습니다.
        </IntroText>
      </AboutTextBox>
    </AboutLayout>
  );
};

export default AboutEvent;
