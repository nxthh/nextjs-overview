import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about M2 and our considered approach to everyday products.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <section className="grid gap-12 border-b pb-20 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">About M2</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Better things for ordinary days.
          </h1>
        </div>
        <p className="text-lg leading-8 text-muted-foreground">
          M2 is a small collection built around useful objects, honest materials,
          and the joy of finding something that fits just right.
        </p>
      </section>
      <section className="grid gap-8 border-b py-12 sm:grid-cols-3">
        {[
          ["20+", "products in the collection"],
          ["04", "thoughtful categories"],
          ["100%", "curiosity guaranteed"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-4xl font-semibold tracking-tight">{value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </section>
      <section className="grid gap-10 py-20 md:grid-cols-3">
        {[
          ["01", "Curious by nature", "We look for the details that make a familiar product feel new again."],
          ["02", "Made for living", "Every item is chosen to be used, enjoyed, and kept in rotation."],
          ["03", "Less, but better", "A focused edit means more room for the things that matter."],
        ].map(([number, title, description]) => (
          <div key={number} className="border-t pt-5">
            <p className="text-sm text-muted-foreground">{number}</p>
            <h2 className="mt-8 text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
          </div>
        ))}
      </section>
      <div className="rounded-2xl bg-zinc-950 px-8 py-12 text-white sm:px-12">
        <h2 className="text-3xl font-semibold">Ready to find something good?</h2>
        <Link href="/product" className={`${buttonVariants({ variant: "secondary" })} mt-6`}>
          Shop the collection
        </Link>
      </div>
    </main>
  );
}
