import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";
import { workList } from "@/lib/work-list";

export default function WorkPage() {
  return (
    <div className="no-gradient flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-16">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            Anurag
          </Link>
          <ThemeToggle />
        </header>

        <section className="mt-12">
          <h1 className="text-2xl font-semibold tracking-tight">Work List</h1>
          <p className="mt-3 text-[15px] text-foreground/80">
            Selected work across fintech, wealth, and consumer experiences.
          </p>
        </section>

        <section className="mt-10">
          <div className="space-y-0">
            {workList.map((work, i) => (
              <Link
                key={i}
                href={work.href}
                className="group flex items-baseline gap-4 py-3 text-[15px] transition-opacity hover:opacity-70"
              >
                <span className="w-24 shrink-0 text-sm text-muted">
                  {work.year}
                </span>
                <span className="flex-1">{work.title}</span>
                <span className="shrink-0 text-sm text-muted">
                  {work.company}
                </span>
              </Link>
            ))}
          </div>
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
