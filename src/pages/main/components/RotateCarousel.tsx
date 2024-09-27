import { lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useCarouselStore } from '@gdg/store/useCarouselStore';

const MemoizedRotateCarousel = lazy(() => import('./PCRotateCarousel'));
const MemoizedTabletRotateCarousel = lazy(
  () => import('./Tablet/TabletRotateCarousel')
);

const RotateCarousel = () => {
  const { angle, setAngle, opacityArray, setOpacityArray } = useCarouselStore();
  const isNotPC = useMediaQuery({ query: '(max-width: 767px)' });
  const rotateAngle = 360 / 6;

  const handlePrevClick = () => {
    setAngle(angle - rotateAngle);
    rotateOpacityArray(false);
  };

  const handleNextClick = () => {
    setAngle(angle + rotateAngle);
    rotateOpacityArray(true);
  };

  const rotateOpacityArray = (isClockwise: boolean) => {
    const newOpacityArray = [...opacityArray];
    if (isClockwise) {
      const popped = newOpacityArray.pop();
      if (popped !== undefined) newOpacityArray.unshift(popped);
    } else {
      const shifted = newOpacityArray.shift();
      if (shifted !== undefined) newOpacityArray.push(shifted);
    }
    setOpacityArray(newOpacityArray);
  };

  return (
    <>
      {isNotPC ? (
        <MemoizedTabletRotateCarousel
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          rotateAngle={rotateAngle}
        />
      ) : (
        <MemoizedRotateCarousel
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          rotateAngle={rotateAngle}
        />
      )}
    </>
  );
};

export default RotateCarousel;
