import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatPrice, type Product } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Card className="h-full bg-white transition-transform hover:-translate-y-1">
      <Link href={`/product/${product.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {image ? (
            <Image
              src={image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover/card:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No image available
            </div>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col gap-3 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {product.category.name}
          </p>
          <h2 className="line-clamp-2 text-lg font-semibold">{product.title}</h2>
          <div className="mt-auto flex items-center justify-between gap-3 pt-3">
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>
            {/* <span className="inline-flex items-center gap-1 text-sm font-medium">
              View <ArrowUpRight className="size-4" />
            </span> */}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
