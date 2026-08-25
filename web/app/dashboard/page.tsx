'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/auth-context';

export default function DashboardPage() {
  const router = useRouter();

  const {
    user,
    isLoading,
    logout,
  } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return (
      <main>
        Loading...
      </main>
    );
  }

  return (
    <main>
      <h1>
        Welcome, {user.firstName || user.email}
      </h1>

      <p>{user.email}</p>

      <p>
        Role: {user.role}
      </p>

      <button
        onClick={() => {
          void logout();
          router.push('/login');
        }}
      >
        Logout
      </button>
    </main>
  );
}