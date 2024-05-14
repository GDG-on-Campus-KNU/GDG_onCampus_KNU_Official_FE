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
    opacityArray: [1, 0.7, 0.5, 0.3, 0.5, 0.7],
    setAngle: (newAngle) => set({ angle: newAngle }),
    setOpacityArray: (newOpacityArray) =>
      set({ opacityArray: newOpacityArray }),
  })
);
