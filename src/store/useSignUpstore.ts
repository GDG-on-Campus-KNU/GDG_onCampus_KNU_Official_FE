import { signUpUserInterface } from '../interface/UserInterface';
import { create } from 'zustand';

interface signUpUserVoidInterface extends signUpUserInterface {
  debounceName: string;
  debounceAge: string | number;
  debounceStudentNumber: string;
  debounceMajor: string;
  setName: (name: string) => void;
  setAge: (age: number) => void;
  setStudentNumber: (studentNumber: string) => void;
  setMajor: (major: string) => void;
  setDebounceName: (debounceName: string) => void;
  setDebounceAge: (debounceAge: string | number) => void;
  setDebounceStudentNumber: (debounceStudentNumber: string) => void;
  setDebounceMajor: (debounceMajor: string) => void;
}

export const useSignUpStore = create<signUpUserVoidInterface>((set) => ({
  name: '',
  age: 1,
  studentNumber: '',
  major: '',
  debounceName: '',
  debounceAge: '',
  debounceStudentNumber: '',
  debounceMajor: '',
  setName: (name) => set({ name: name }),
  setAge: (age) => set({ age: age }),
  setStudentNumber: (studentNumber) => set({ studentNumber: studentNumber }),
  setMajor: (major) => set({ major: major }),
  setDebounceName: (debounceName) => set({ debounceName: debounceName }),
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
    set({ debounceStudentNumber: debounceStudentNumber }),
  setDebounceMajor: (debounceMajor) => set({ debounceMajor: debounceMajor }),
}));
