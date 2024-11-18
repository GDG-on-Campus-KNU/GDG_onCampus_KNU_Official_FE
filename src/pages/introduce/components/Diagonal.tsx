import styled from '@emotion/styled';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const DiagonalLayout = styled.div`
  width: 100%;
  height: 202px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
`;

const DiagonalLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: var(--color-white);
  transform: rotate(7.49deg);
`;

const Diagonal = () => {
  useEffect(() => {
    gsap.to('.animateDiagnol', {
      scrollTrigger: {
        trigger: '.animateDiagnol',
        start: 'top 80%',
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
    <DiagonalLayout className='animateDiagnol'>
      <DiagonalLine />
    </DiagonalLayout>
  );
};

export default Diagonal;
