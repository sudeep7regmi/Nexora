"use client";
import {
  ArrowRight,
  Heart,
  House,
  ShoppingBag,
  ShieldCheck,
  Smartphone,
  Truck,
  WalletCards,
  Watch,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    description: "Smart devices & accessories",
    icon: Smartphone,
  },
  {
    name: "Fashion",
    description: "Style for every occasion",
    icon: ShoppingBag,
  },
  {
    name: "Home & Living",
    description: "Make your space yours",
    icon: House,
  },
  {
    name: "Accessories",
    description: "The details that matter",
    icon: Watch,
  },
];

const features = [
  {
    title: "Secure Shopping",
    description:
      "Your information and transactions are protected with modern security practices.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly and reliably, wherever you are.",
    icon: Truck,
  },
  {
    title: "Easy Payments",
    description:
      "Choose from convenient payment options for a smooth checkout experience.",
    icon: WalletCards,
  },
];

const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "NPR 4,999",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Minimal Watch",
    category: "Accessories",
    price: "NPR 3,499",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Everyday Sneakers",
    category: "Fashion",
    price: "NPR 5,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
              N
            </div>

            <span className="text-xl font-bold tracking-tight">Nexora</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#shop"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              Shop
            </Link>

            <Link
              href="#categories"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              Categories
            </Link>

            <Link
              href="#about"
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/users"
              className="hidden text-sm font-medium text-slate-700 sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/users"
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
              Your modern shopping experience
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Everything you need.
              <span className="block text-slate-400">One place.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Discover products you love, compare your options, and enjoy a
              simple shopping experience built around you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#shop"
                className="rounded-xl bg-slate-950 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Shop now
              </Link>

              <Link
                href="#categories"
                className="rounded-xl border border-slate-300 px-6 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore categories
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-slate-500">Products</p>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-bold">5K+</p>
                <p className="text-sm text-slate-500">Customers</p>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-sm text-slate-500">Experience</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-slate-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-4 shadow-2xl">
              <div className="rounded-2xl bg-slate-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    Featured collection
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    New
                  </span>
                </div>

                <div className="overflow-hidden rounded-2xl bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                    alt="Nexora shopping collection"
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Curated for you
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Discover your next favorite thing.
                    </p>
                  </div>

                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Shop by category
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  href="#shop"
                  key={category.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-semibold">{category.name}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-slate-700">
                    Browse
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Popular now
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured products
            </h2>
          </div>

          <Link
            href="#"
            className="hidden items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-950 sm:flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-red-500"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {product.category}
                </p>

                <div className="mt-1 flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="font-semibold">{product.price}</p>
                </div>

                <button className="mt-4 w-full rounded-lg border border-slate-300 py-2.5 text-sm font-semibold transition hover:bg-slate-950 hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nexora */}
      <section id="about" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Why Nexora
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Shopping should be simple.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We are building Nexora around one simple idea: give customers
              everything they need to discover and purchase products without
              unnecessary complexity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-t border-slate-800 pt-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-200">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 px-6 py-16 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to discover something new?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
            Create your Nexora account and start exploring products curated for
            modern shoppers.
          </p>

          <Link
            href="/users"
            className="mt-8 inline-flex rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Create your account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-white">
              N
            </div>

            <span className="font-semibold">Nexora</span>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}