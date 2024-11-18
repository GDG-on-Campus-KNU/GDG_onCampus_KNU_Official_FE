import { useEffect } from 'react';

import { useColTzStore } from '@gdg/store/useColTzStore';

export const useColTz = () => {
  const { colTz, setColTz } = useColTzStore();

  useEffect(() => {
    const calculateColTz = () => {
      const rotateAngle = 360 / 6;
      let colTzValue = Math.round(
        236 / 2 / Math.tan((rotateAngle / 2) * (Math.PI / 250))
      );

      if (window.innerWidth <= 768 && window.innerWidth > 500) {
        colTzValue = Math.round(
          236 / 2 / Math.tan((rotateAngle / 1.6) * (Math.PI / 250))
        );
      } else if (window.innerWidth <= 500) {
        colTzValue = Math.round(
          236 / 2 / Math.tan((rotateAngle / 1.3) * (Math.PI / 250))
        );
      }

      setColTz(colTzValue);
    };

    calculateColTz();

    const handleResize = () => {
      calculateColTz();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setColTz]);

  return colTz;
};
