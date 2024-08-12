import { create } from 'zustand';

interface SelectedUserInterface {
  selectedUsers: number[];
  addSelectedUser: (userId: number) => void;
  clearSelectedUsers: () => void;
}

export const useSelectedUserStore = create<SelectedUserInterface>((set) => ({
  selectedUsers: [],
  addSelectedUser: (userId) =>
    set((state) => {
      const isSelected = state.selectedUsers.includes(userId);
      return {
        selectedUsers: isSelected
          ? state.selectedUsers.filter((id) => id !== userId)
          : [...state.selectedUsers, userId],
      };
    }),
  clearSelectedUsers: () => set({ selectedUsers: [] }),
}));
