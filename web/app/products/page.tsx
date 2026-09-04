import Link from "next/link";

import { getProducts } from "@/features/products/api/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Products
        </h1>

        <p className="mt-2 text-slate-600">Browse our latest products.</p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
          <p className="text-slate-600">No products available.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const activeVariants = product.variants.filter(
              (variant) => variant.isActive
            );

            const lowestPrice =
              activeVariants.length > 0
                ? Math.min(
                    ...activeVariants.map((variant) => Number(variant.price))
                  )
                : null;

            return (
              <article
                key={product.id}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {product.category.name}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold text-slate-950">
                      {product.name}
                    </h2>
                  </div>

                  {product.isActive && (
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  )}
                </div>

                {product.brand && (
                  <p className="mb-2 text-sm font-medium text-slate-700">
                    {product.brand}
                  </p>
                )}

                {product.description && (
                  <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>
                )}

                <div className="mb-5">
                  {lowestPrice !== null ? (
                    <p className="text-lg font-bold text-slate-950">
                      From Rs. {lowestPrice.toFixed(2)}
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500">No active variants</p>
                  )}

                  <p className="mt-1 text-sm text-slate-500">
                    {activeVariants.length}{" "}
                    {activeVariants.length === 1 ? "variant" : "variants"}
                  </p>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="block rounded-lg bg-slate-950 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View Product
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
