import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-153px)] items-center overflow-hidden bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[min(70vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/40 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-zinc-400">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15">
              <Compass className="size-4" />
            </span>
            M2 / Lost & found
          </div>

          <p className="text-8xl font-semibold leading-none tracking-[-0.08em] text-white sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
            This page wandered off.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
            The link may be out of date, or the page may have moved somewhere
            new. Let&apos;s get you back to the good stuff.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className={buttonVariants({ size: "lg", className: "gap-2" })}
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-zinc-300 underline decoration-zinc-600 underline-offset-8 transition-colors hover:text-white"
            >
              Browse collection
            </Link>
          </div>
        </div>

        <div className="hidden border border-white/10 p-3 sm:block lg:w-72">
          <div className="flex aspect-square flex-col justify-between bg-white p-6 text-zinc-950">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Coordinates unknown
            </p>
            <div>
              <div className="mb-5 h-px w-full bg-zinc-200" />
              <p className="text-sm leading-6 text-zinc-500">
                No destination found at this address.
              </p>
              <p className="mt-8 text-6xl font-semibold tracking-[-0.08em]">
                M2
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
