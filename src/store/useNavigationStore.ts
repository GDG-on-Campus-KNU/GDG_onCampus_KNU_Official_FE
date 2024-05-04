import { create } from 'zustand';

interface NavigationSlideInterface {
  isOpen: boolean;
}

interface NavigationSlideActionInterface extends NavigationSlideInterface {
  open: () => void;
  close: () => void;
}

export const useNavigationStore = create<
  NavigationSlideInterface & NavigationSlideActionInterface
>((set) => ({
  isOpen: false,
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));
