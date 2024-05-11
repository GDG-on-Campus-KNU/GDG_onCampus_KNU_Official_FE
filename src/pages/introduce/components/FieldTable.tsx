import { useEffect } from 'react';

import gsap from 'gsap';

import Text from '@gdsc/components/typography/Text';

import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FieldTableBox = styled.div`
  display: grid;
  width: auto;
  padding: 0 80px;
  margin: 91px 0 100px 0px;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 23px;
  column-gap: 29px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 33px;
  }

  &.animateFieldTable {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const CoreBox = styled.div`
  position: relative;
  width: 379px;
  height: 123px;
  padding: 22px 26px 28px 18px;
  border-radius: 15px;
  background-color: var(--color-white);
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ExplainLayout = styled.div`
  margin-top: 21.54px;
`;

const HighlightText = styled(Text)<{ highlightColor?: string }>`
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: ${({ highlightColor }) => highlightColor || 'yellow'};
    transform: rotate(-5deg);
    z-index: -1;
  }
`;

const FieldTable = () => {
  useEffect(() => {
    gsap.to('.animateFieldTable', {
      scrollTrigger: {
        trigger: '.animateFieldTable',
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <FieldTableBox className='animateFieldTable'>
      <CoreBox>
        <TextLayout>
          <HighlightText
            color='black'
            weight='600'
            size='xl'
            highlightColor='#F7B4AE'
          >
            FRONTEND DEVELOPER
          </HighlightText>
          <ExplainLayout>
            <Text color='black' size='md'>
              사용자와 서비스가 직접 상호작용하는 부분을 담당합니다. 웹이나 앱을
              시각화하고, 사용자들이 쉽고 빠르게 사용할 수 있도록 서비스를
              구축하고 개선합니다.
            </Text>
          </ExplainLayout>
        </TextLayout>
      </CoreBox>
      <CoreBox>
        <TextLayout>
          <HighlightText
            color='black'
            weight='600'
            size='xl'
            highlightColor='#9FD8BC'
          >
            BACKEND DEVELOPER
          </HighlightText>
          <ExplainLayout>
            <Text color='black' size='md'>
              웹이나 앱의 보이지 않는 서버를 담당합니다. 사용자가 웹이나 앱과
              상호작용할 때 필요한 서버, 데이터베이스, 애플리케이션 로직을
              개발하고 유지보수합니다.
            </Text>
          </ExplainLayout>
        </TextLayout>
      </CoreBox>
      <CoreBox>
        <TextLayout>
          <HighlightText
            color='black'
            weight='600'
            size='xl'
            highlightColor='#B3CEFB'
          >
            AI ENGINEER
          </HighlightText>
          <ExplainLayout>
            <Text color='black' size='md'>
              인공지능 시스템을 설계하는 엔지니어입니다. 인공지능 기술을
              활용하여 업무를 자동화하거나 인사이트를 도출하는 등 각종 문제를
              해결합니다.
            </Text>
          </ExplainLayout>
        </TextLayout>
      </CoreBox>
      <CoreBox>
        <TextLayout>
          <HighlightText
            color='black'
            weight='600'
            size='xl'
            highlightColor='#FDE49B'
          >
            ANDROID DEVELOPER
          </HighlightText>
          <ExplainLayout>
            <Text color='black' size='md'>
              모바일 애플리케이션 설계, 개발 및 유지보수를 담당합니다.
              안드로이드 플랫폼에서의 소프트웨어 개발에 특화되어 사용자 경험을
              개선하고 기능을 구현합니다.
            </Text>
          </ExplainLayout>
        </TextLayout>
      </CoreBox>
      <CoreBox>
        <TextLayout>
          <HighlightText
            color='black'
            weight='600'
            size='xl'
            highlightColor='#D1B3FD'
          >
            DESIGNER
          </HighlightText>
          <ExplainLayout>
            <Text color='black' size='md'>
              사용자 조사, 정보 구조 설계, 와이어 프레임 및 프로토타입 제작 등의
              작업을 담당합니다. 디자이너는 사용자의 니즈와 목표를 이해하고,
              해당 제품 또는 서비스가 사용자에게 제공하는 가치를 극대화하기 위해
              최적의 경험을 설계합니다.
            </Text>
          </ExplainLayout>
        </TextLayout>
      </CoreBox>
    </FieldTableBox>
  );
};

export default FieldTable;
