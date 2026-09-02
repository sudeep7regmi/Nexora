import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
      {/* Hero Section */}{" "}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        {" "}
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          Welcome to Nexora{" "}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Discover products made for your everyday life.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Explore quality products, manage your cart, and enjoy a simple and
          seamless shopping experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/products"
            className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Products
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Create Account
          </Link>
        </div>
      </section>
      {/* Features */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-semibold text-slate-950">
              Quality Products
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse products and discover options that fit your needs.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-semibold text-slate-950">
              Simple Shopping
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Add products to your cart and manage your order with ease.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-semibold text-slate-950">
              Secure Account
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Manage your account, addresses, and orders securely.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
