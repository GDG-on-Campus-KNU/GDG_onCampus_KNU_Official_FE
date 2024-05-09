import { useEffect } from 'react';

import gsap from 'gsap';

import { IntroText, IntroTextStyle } from '@gdsc/styles/IntroduceStyle';

import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

const CoreBox = styled.div`
  width: 140px;
  height: 132px;
  padding: 24px 20px;
  border-radius: var(--size-xs);
  background-color: var(--color-app);

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
      <CoreBox>
        <TableStatusText>LEAD</TableStatusText>
        <TableTextLayout>
          <IntroText>대동환</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-FE</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-BE</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-AI</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
      <CoreBox>
        <TableStatusText>CORE-DESIGNER</TableStatusText>
        <TableTextLayout>
          <IntroText>코어 이름</IntroText>
        </TableTextLayout>
      </CoreBox>
    </CoreTableBox>
  );
};

export default CoreTable;
