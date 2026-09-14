import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Collection",
  description: "Browse the latest M2 collection.",
};

export default async function ProductPage() {
  const products = await getProducts(20);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          The collection
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">Find your next favorite.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          A considered selection of products for everyday life.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-2 border-y py-4 text-sm">
        {["All products", "Clothing", "Electronics", "Furniture"].map((category, index) => (
          <span
            key={category}
            className={`rounded-full px-4 py-2 ${
              index === 0 ? "bg-zinc-950 text-white" : "bg-muted text-muted-foreground"
            }`}
          >
            {category}
          </span>
        ))}
        <span className="ml-auto hidden items-center text-muted-foreground sm:flex">
          {products.length} pieces
        </span>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
