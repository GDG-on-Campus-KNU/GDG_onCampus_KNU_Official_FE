import { signUpUserInterface } from '../interface/UserInterface';
import { create } from 'zustand';

interface signUpUserStateInterface extends signUpUserInterface {
  debounceName: string;
  debounceAge: string | number;
  debounceStudentNumber: string;
  debounceMajor: string;
}

interface signUpUserActionInterface extends signUpUserInterface {
  setName: (name: string) => void;
  setAge: (age: number) => void;
  setStudentNumber: (studentNumber: string) => void;
  setMajor: (major: string) => void;
  setDebounceName: (debounceName: string) => void;
  setDebounceAge: (debounceAge: string | number) => void;
  setDebounceStudentNumber: (debounceStudentNumber: string) => void;
  setDebounceMajor: (debounceMajor: string) => void;
}

export const useSignUpStore = create<
  signUpUserStateInterface & signUpUserActionInterface
>((set) => ({
  name: '',
  age: 1,
  studentNumber: '',
  major: '',
  debounceName: '',
  debounceAge: '',
  debounceStudentNumber: '',
  debounceMajor: '',
  setName: (name) => set((state) => ({ ...state, name })),
  setAge: (age) => set((state) => ({ ...state, age })),
  setStudentNumber: (studentNumber) =>
    set((state) => ({ ...state, studentNumber })),
  setMajor: (major) => set((state) => ({ ...state, major })),
  setDebounceName: (debounceName) =>
    set((state) => ({ ...state, debounceName })),
  setDebounceAge: (debounceAge) => {
    if (debounceAge === '') {
      set({ debounceAge: '' });
    } else if (!isNaN(Number(debounceAge))) {
      set({ debounceAge: Number(debounceAge) });
    }

    if (Number(debounceAge) >= 0) {
      set({ debounceAge: Number(debounceAge) });
    }
  },
  setDebounceStudentNumber: (debounceStudentNumber) =>
    set((state) => ({ ...state, debounceStudentNumber })),
  setDebounceMajor: (debounceMajor) =>
    set((state) => ({ ...state, debounceMajor })),
}));
