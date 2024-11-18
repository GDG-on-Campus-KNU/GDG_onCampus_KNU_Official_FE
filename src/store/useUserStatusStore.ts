import type { User, UnauthenticatedUser } from '@gdg/types/UserInterface';
import { create } from 'zustand';

interface UserState {
  user: User | UnauthenticatedUser | null;
}

interface UserAction extends UserState {
  setUser: (user: User | UnauthenticatedUser | null) => void;
}

const useUserStatusStore = create<UserAction>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStatusStore;
