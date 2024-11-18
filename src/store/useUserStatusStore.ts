import { create } from 'zustand';

import type { User, UnauthenticatedUser } from '@gdg/types/UserInterface';

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
