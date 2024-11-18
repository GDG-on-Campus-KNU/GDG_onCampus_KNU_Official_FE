import { AuthAccessInterface } from '@gdg/types/OAuthInterface';
import { create } from 'zustand';

export interface AuthAccessActionInterface extends AuthAccessInterface {
  getAccessToken: () => void;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useTokenStore = create<
  AuthAccessInterface & AuthAccessActionInterface
>((set, get) => ({
  accessToken: '',
  getAccessToken: () => get().accessToken,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: '' }),
}));
