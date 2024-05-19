import { create } from 'zustand';

interface ColTzState {
  colTz: number;
}

interface ColTzAction extends ColTzState {
  setColTz: (newColTz: number) => void;
}

export const useColTzStore = create<ColTzState & ColTzAction>((set) => ({
  colTz: 0,
  setColTz: (newColTz) => set({ colTz: newColTz }),
}));
