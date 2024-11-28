import { useEffect } from 'react';

import { handleIntroduceScroll } from '@gdg/utils/anlytics';

// 유틸리티 함수 경로

const useScrollTracker = () => {
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrollPosition / scrollHeight) * 100;

      if (scrolledPercentage >= 50) {
        handleIntroduceScroll();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};

export default useScrollTracker;
