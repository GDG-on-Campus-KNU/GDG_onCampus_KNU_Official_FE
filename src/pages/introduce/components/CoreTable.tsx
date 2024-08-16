import { useEffect } from 'react';

import gsap from 'gsap';

import Bosung from '@gdsc/assets/gdscknu4/Core-Bosung.jpg';
import Daegun from '@gdsc/assets/gdscknu4/Core-Daegun.jpg';
import Dongpil from '@gdsc/assets/gdscknu4/Core-Dongpil.jpg';
import Kangmin from '@gdsc/assets/gdscknu4/Core-Gangmin.jpeg';
import Hyunmin from '@gdsc/assets/gdscknu4/Core-Hyeonmin.jpeg';
import Jaeyong from '@gdsc/assets/gdscknu4/Core-Jaeyong.jpg';
import Suhyeon from '@gdsc/assets/gdscknu4/Core-Suhyeon.jpg';
import Yeongin from '@gdsc/assets/gdscknu4/Core-Yeongin.jpg';
import Kyuhoi from '@gdsc/assets/gdscknu4/Lead-Kyuhoi.png';

import { IntroText, IntroTextStyle } from '@gdsc/styles/IntroduceStyle';

import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CoreBoxProps = {
  backgroundImage: string;
};

const CoreTableBox = styled.div`
  display: grid;
  margin-bottom: 92px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  column-gap: 45px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 23px;
    row-gap: 40px;
  }

  &.animateTable {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const CoreBox = styled.div<CoreBoxProps>`
  width: 140px;
  height: 132px;
  padding: 24px 20px;
  border-radius: var(--size-xs);
  background-color: var(--color-app);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.backgroundImage});
  background-size: contain;

  @media (max-width: 750px) {
    width: 120px;
    height: 112px;
  }

  @media (max-width: 620px) {
    width: 105px;
    height: 97px;
  }
`;

const TableStatusText = styled.div`
  ${IntroTextStyle}
  color: var(--color-selective);
`;

const TableTextLayout = styled.div`
  margin-top: 22px;
`;

const CoreTable = () => {
  useEffect(() => {
    gsap.to('.animateTable', {
      scrollTrigger: {
        trigger: '.animateTable',
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
    <CoreTableBox className='animateTable'>
      <CoreBox backgroundImage={Kyuhoi}>
        <TableStatusText>LEAD</TableStatusText>
        <TableTextLayout>
          <IntroText>김규회</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Kangmin}>
        <TableStatusText>CORE-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>김강민</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Dongpil}>
        <TableStatusText>CORE-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>조동필</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Daegun}>
        <TableStatusText>CORE-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>김대건</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Suhyeon}>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>권수현</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Yeongin}>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>김영인</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Jaeyong}>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>윤재용</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Bosung}>
        <TableStatusText>CORE-AI</TableStatusText>
        <TableTextLayout>
          <IntroText>백보성</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox backgroundImage={Hyunmin}>
        <TableStatusText>CORE-DESIGNER</TableStatusText>
        <TableTextLayout>
          <IntroText>김현민</IntroText>
        </TableTextLayout>
      </CoreBox>
    </CoreTableBox>
  );
};

export default CoreTable;
