import styled from '@emotion/styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import Text from '@gdg/components/common/typography/Text';
import { GDSCText, IntroText } from '@gdg/styles/IntroduceStyle';
import { displayCenter } from '@gdg/styles/LayoutStyle';

gsap.registerPlugin(ScrollTrigger);

const FieldLayout = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 202px;
  opacity: 0;
  transform: translateY(50px);
`;

const RecruitFieldBox = styled.div`
  margin-top: 18px;
`;

const RecruitIntroBox = styled.div`
  margin-top: 72px;
`;

const FieldEvent = () => {
  useEffect(() => {
    gsap.to('.animateField', {
      scrollTrigger: {
        trigger: '.animateField',
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
    <FieldLayout className='animateField'>
      <Text color='white' weight='600' size='xs'>
        FIELD
      </Text>
      <RecruitFieldBox>
        <GDSCText>Recruitment Field Composition</GDSCText>
      </RecruitFieldBox>
      <RecruitIntroBox>
        <IntroText>
          GDG on Campus KNU는 5가지 직렬로 구성되어 있습니다.
        </IntroText>
      </RecruitIntroBox>
    </FieldLayout>
  );
};

export default FieldEvent;
