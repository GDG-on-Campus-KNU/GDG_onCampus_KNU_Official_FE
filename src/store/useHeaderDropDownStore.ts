import { create } from 'zustand';

interface DropdownState {
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

const useDropdownStore = create<DropdownState>((set) => ({
  dropdownOpen: false,
  toggleDropdown: () => set((state) => ({ dropdownOpen: !state.dropdownOpen })),
  closeDropdown: () => set({ dropdownOpen: false }),
}));

export const useHeaderDropDownState = <T>(
  selector: (state: DropdownState) => T
): T => {
  return useDropdownStore(selector);
};
