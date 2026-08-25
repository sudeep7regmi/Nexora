"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/auth-context";
import { getAddresses, deleteAddress, type Address } from "@/lib/addresses";
import { AddressForm } from "@/components/address/AddressForm";


export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, logout } = useAuth();

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [addressesLoading, setAddressesLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  useEffect(() => {
    if (isLoading || !user) return;

    async function loadAddresses() {
      try {
        const data = await getAddresses();
        setAddresses(data);
      } catch (error) {
        console.error("Failed to load addresses:", error);
      } finally {
        setAddressesLoading(false);
      }
    }

    void loadAddresses();
  }, [isLoading, user]);

  const handleSavedSuccess = (savedAddress: Address) => {
    setAddresses((current) => {
      const exists = current.some((a) => a.id === savedAddress.id);
      
      let updatedList = exists
        ? current.map((a) => (a.id === savedAddress.id ? savedAddress : a))
        : [savedAddress, ...current];

      if (savedAddress.isDefault) {
        updatedList = updatedList.map((a) =>
          a.id === savedAddress.id ? a : { ...a, isDefault: false }
        );
      }
      return updatedList;
    });

    setShowForm(false);
    setSelectedAddress(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this address?")) return;
    try {
      setDeletingId(id);
      await deleteAddress(id);
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Failed to delete address:", error);
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <span className="font-medium text-slate-500">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-slate-900">
              Welcome, {user.firstName || user.email}
            </h1>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={async () => {
              await logout();
              router.push("/login");
            }}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">My Addresses</h2>
            <p className="text-sm text-slate-500">Manage delivery locations.</p>
          </div>
          {!showForm && (
            <button
              type="button"
              onClick={() => {
                setSelectedAddress(null);
                setShowForm(true);
              }}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Add Address
            </button>
          )}
        </div>

        {showForm && (
          <AddressForm
            initialAddress={selectedAddress}
            onSuccess={handleSavedSuccess}
            onCancel={() => {
              setShowForm(false);
              setSelectedAddress(null);
            }}
          />
        )}

        {addressesLoading ? (
          <p className="text-sm text-slate-500">Loading addresses...</p>
        ) : addresses.length === 0 ? (
          <p className="text-sm text-slate-500">No addresses saved yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addresses.map((address) => (
              <article
                key={address.id}
                className={`flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm ${
                  address.isDefault ? "border-indigo-500 ring-1 ring-indigo-500" : "border-slate-200"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{address.label}</span>
                    {address.isDefault && (
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-600">
                    <p className="font-medium text-slate-800">{address.fullName}</p>
                    <p className="text-xs text-slate-500">{address.phone}</p>
                    <p className="pt-2">
                      {address.addressLine1}
                      {address.addressLine2 && `, ${address.addressLine2}`}
                    </p>
                    <p>
                      {address.city}
                      {address.state && `, ${address.state}`} {address.postalCode}
                    </p>
                    <p className="text-xs font-medium text-slate-500 uppercase">{address.country}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowForm(true);
                    }}
                    className="rounded px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    disabled={deletingId === address.id}
                    onClick={() => handleDelete(address.id)}
                    className="rounded px-2 py-1 text-xs font-medium text-slate-500 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                  >
                    {deletingId === address.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}