import { api } from './api';

export interface Address {
  id: string;
  userId: string;
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state?: string | null;
  postalCode: string;
  country: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAddressInput {
  label: string;
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country?: string;
  isDefault?: boolean;
}

export interface UpdateAddressInput {
  label?: string;
  fullName?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  isDefault?: boolean;
}

export function getAddresses() {
  return api<Address[]>('/addresses');
}

export function getAddress(id: string) {
  return api<Address>(`/addresses/${id}`);
}

export function createAddress(data: CreateAddressInput) {
  return api<Address>('/addresses', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateAddress(
  id: string,
  data: UpdateAddressInput,
) {
  return api<Address>(`/addresses/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteAddress(id: string) {
  return api<Address>(`/addresses/${id}`, {
    method: 'DELETE',
  });
}