import { create } from 'zustand';

import { AuthAccessInterface } from '@gdsc/interface/OAuthInterface';

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
