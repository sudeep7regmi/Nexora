"use client";

import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import { useProducts } from "@/features/products/hooks/use-products";
import { deleteProduct } from "@/features/products/api/products";

export default function AdminProductsPage() {
  const { data: products, isLoading, isError, error } = useProducts();
  const queryClient = useQueryClient();

  async function handleDelete(id: string, name: string) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(id);

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product.");
    }
  }

  return (
    <main className="p-6 lg:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">
            Products
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage products in your store.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Add Product
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {isLoading && (
          <div className="p-8 text-center text-sm text-slate-500">
            Loading products...
          </div>
        )}

        {isError && (
          <div className="p-8 text-center text-sm text-red-600">
            {error instanceof Error
              ? error.message
              : "Failed to load products."}
          </div>
        )}

        {!isLoading && !isError && products?.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-sm text-slate-500">
              No products found.
            </p>
          </div>
        )}

        {!isLoading && !isError && products && products.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Product
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Variants
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-slate-950">
                          {product.name}
                        </p>

                        {product.brand && (
                          <p className="mt-1 text-xs text-slate-500">
                            {product.brand}
                          </p>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {product.category.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {product.variants.length}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          product.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {product.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-3">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="text-sm font-medium text-slate-700 hover:text-slate-950"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(product.id, product.name)
                          }
                          className="text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}