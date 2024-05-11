import { useEffect } from 'react';

import gsap from 'gsap';

import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollLine = styled.div`
  width: 2px;
  height: 164px;
  background-color: var(--color-white);
`;

const ScrollTag = styled.div`
  width: 2px;
  height: 88px;
  background-color: var(--color-blue);
`;

const LineEvent = () => {
  useEffect(() => {
    gsap.to('.scroll-tag', {
      y: 50,
      ease: 'power1.easeInOut',
      scrollTrigger: {
        trigger: '.scroll-line',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <ScrollLine className='scroll-line'>
      <ScrollTag className='scroll-tag' />
    </ScrollLine>
  );
};

export default LineEvent;
