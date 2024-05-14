import { create } from 'zustand';

interface CarouselState {
  angle: number;
  opacityArray: number[];
}

interface CarouselAction extends CarouselState {
  setAngle: (newAngle: number) => void;
  setOpacityArray: (newOpacityArray: number[]) => void;
}

export const useCarouselStore = create<CarouselState & CarouselAction>(
  (set) => ({
    angle: 0,
    opacityArray: [1, 0.6, 0.1, 0.04, 0.1, 0.6],
    setAngle: (newAngle) => set({ angle: newAngle }),
    setOpacityArray: (newOpacityArray) =>
      set({ opacityArray: newOpacityArray }),
  })
);
