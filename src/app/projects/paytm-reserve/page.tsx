import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";

export default function PaytmReservePage() {
  return (
    <div className="no-gradient flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-16">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium tracking-tight transition-opacity hover:opacity-70"
          >
            Anurag
          </Link>
          <ThemeToggle />
        </header>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded border border-border px-2 py-1 text-xs font-mono text-badge-text transition-colors hover:border-foreground/50"
          >
            ← Back to home
          </Link>
        </div>

        <section className="mt-10">
          <h1 className="text-2xl font-semibold tracking-tight">
            Paytm Reserve
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
            Full case study coming soon.
          </p>
        </section>

        <div className="mt-12 mb-8">
          <div className="h-px w-12 bg-foreground" />
        </div>

        <footer className="pb-8">
          <Clock />
        </footer>
      </div>
    </div>
  );
}
