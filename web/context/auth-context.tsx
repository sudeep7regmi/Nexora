"use client";

import { createContext, useContext, type ReactNode } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";

import type {
  AuthMeResponse,
  LoginDto,
  LoginResponse,
  User,
} from "@/types/auth";

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

const AUTH_QUERY_KEY = ["auth", "me"];

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  /*

* GET /auth/me
*
* This replaces:
*
* useEffect()
* useState()
* setIsLoading()
  */
  const { data: user, isLoading } = useQuery({
    queryKey: AUTH_QUERY_KEY,

    queryFn: async (): Promise<User | null> => {
      try {
        const authUser = await api<AuthMeResponse>("/auth/me");

        return {
          id: authUser.userId,
          email: authUser.email,
          firstName: "",
          lastName: "",
          role: authUser.role,
        };
      } catch {
        return null;
      }
    },

    retry: false,
  });

  /*

* POST /auth/login
  */
  const loginMutation = useMutation({
    mutationFn: (data: LoginDto) =>
      api<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    onSuccess: (result) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, result.user);
    },
  });

  /*

* POST /auth/logout
  */
  const logoutMutation = useMutation({
    mutationFn: () =>
      api<{ message: string }>("/auth/logout", {
        method: "POST",
      }),

    onSuccess: () => {
      queryClient.setQueryData(AUTH_QUERY_KEY, null);

      queryClient.removeQueries({
        queryKey: AUTH_QUERY_KEY,
      });
    },
  });

  async function login(data: LoginDto): Promise<void> {
    await loginMutation.mutateAsync(data);
  }

  async function logout(): Promise<void> {
    await logoutMutation.mutateAsync();
  }

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
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
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
