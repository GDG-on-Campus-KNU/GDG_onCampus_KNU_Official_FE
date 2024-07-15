import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

import { authLocalStorage } from '@gdsc/utils/storage';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = authLocalStorage.get();
    return storedToken || null;
  });

  useEffect(() => {
    if (token) {
      authLocalStorage.set(token);
    } else {
      authLocalStorage.set(null);
    }
  }, [token]);

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
