'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { api } from '@/lib/api';
import type {
  AuthMeResponse,
  LoginDto,
  LoginResponse,
  User,
} from '@/types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: LoginDto) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initializeAuth() {
      try {
        const authUser =
          await api<AuthMeResponse>('/auth/me');

        setUser({
          id: authUser.userId,
          email: authUser.email,
          firstName: '',
          lastName: '',
          role: authUser.role,
        });
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    void initializeAuth();
  }, []);

  const login = async (
    data: LoginDto,
  ): Promise<void> => {
    const result = await api<LoginResponse>(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
      },
    );

    setUser(result.user);
  };

  const logout = async (): Promise<void> => {
    await api<{ message: string }>('/auth/logout', {
      method: 'POST',
    });

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider',
    );
  }

  return context;
}