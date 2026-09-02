"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/auth-context";

export function Navbar() {
  const router = useRouter();
  const { user, isLoading, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      {" "}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}{" "}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-950"
        >
          NEXORA{" "}
        </Link>
        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/products"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Products
          </Link>

          {!isLoading && (
            <>
              {user ? (
                <>
                  <Link
                    href="/cart"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Cart
                  </Link>

                  <Link
                    href="/account"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Account
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
