import { signUpUserInterface } from '../interface/UserInterface';
import { create } from 'zustand';

interface signUpUserVoidInterface extends signUpUserInterface {
  debounceName: string;
  debounceAge: number;
  debounceStudentNumber: string;
  debounceMajor: string;
  setName: (name: string) => void;
  setAge: (age: number) => void;
  setStudentNumber: (studentNumber: string) => void;
  setMajor: (major: string) => void;
  setDebounceName: (debounceName: string) => void;
  setDebounceAge: (debounceAge: number) => void;
  setDebounceStudentNumber: (debounceStudentNumber: string) => void;
  setDebounceMajor: (debounceMajor: string) => void;
}

export const useSignUpStore = create<signUpUserVoidInterface>((set) => ({
  name: '',
  age: 0,
  studentNumber: '',
  major: '',
  debounceName: '',
  debounceAge: 0,
  debounceStudentNumber: '',
  debounceMajor: '',
  setName: (name: string) => set({ name: name }),
  setAge: (age: number) => set({ age: age }),
  setStudentNumber: (studentNumber: string) =>
    set({ studentNumber: studentNumber }),
  setMajor: (major: string) => set({ major: major }),
  setDebounceName: (debounceName: string) =>
    set({ debounceName: debounceName }),
  setDebounceAge: (debounceAge: number) => set({ debounceAge: debounceAge }),
  setDebounceStudentNumber: (debounceStudentNumber: string) =>
    set({ debounceStudentNumber: debounceStudentNumber }),
  setDebounceMajor: (debounceMajor: string) =>
    set({ debounceMajor: debounceMajor }),
}));
