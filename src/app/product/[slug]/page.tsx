import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { formatPrice, getProduct } from "@/lib/api";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await getProduct(slug);
    return {
      title: product.title,
      description: product.description,
      openGraph: { title: product.title, description: product.description, images: product.images },
    };
  } catch {
    return { title: "Product not found" };
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  let product;

  try {
    product = await getProduct(slug);
  } catch {
    notFound();
  }

  const image = product.images[0];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
      <Link href="/product" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> Back to collection
      </Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-3 sm:grid-cols-[1fr_0.28fr]">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            {image ? (
              <Image src={image} alt={product.title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            ) : null}
          </div>
          <div className="hidden gap-3 sm:grid">
            {product.images.slice(1, 3).map((productImage) => (
              <div key={productImage} className="relative min-h-0 overflow-hidden rounded-xl bg-muted">
                <Image src={productImage} alt="" fill sizes="15vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xl lg:pl-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{product.category.name}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{product.title}</h1>
          <div className="mt-6 flex items-center gap-4">
            <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">In stock</span>
          </div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{product.description}</p>
          <Button size="lg" className="mt-8 w-full sm:w-auto">
            <ShoppingBag className="size-4" /> Add to bag
          </Button>
          <div className="mt-10 grid grid-cols-2 border-y py-5 text-sm">
            <div><p className="text-muted-foreground">Category</p><p className="mt-1 font-medium">{product.category.name}</p></div>
            <div><p className="text-muted-foreground">Shipping</p><p className="mt-1 font-medium">Free delivery</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
