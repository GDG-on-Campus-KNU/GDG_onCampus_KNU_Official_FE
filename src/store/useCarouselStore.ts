import { create } from 'zustand';

interface CarouselState {
  angle: number;
  isDragging: boolean;
  setAngle: (newAngle: number) => void;
  setIsDragging: (dragging: boolean) => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  angle: 0,
  isDragging: false,
  setAngle: (newAngle) => set({ angle: newAngle }),
  setIsDragging: (dragging) => set({ isDragging: dragging }),
}));
