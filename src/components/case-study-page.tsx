import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";
import Link from "next/link";
import { workList } from "@/lib/work-list";

type CaseStudySection = {
  title: string;
  points: string[];
  label: string;
  note: string;
  secondaryLabel?: string;
  secondaryNote?: string;
  tertiaryLabel?: string;
  tertiaryNote?: string;
};

type CaseStudyPageProps = {
  heroTitle: string;
  year: string;
  role: string;
  company: string;
  timeline: string;
  intro: string[];
  sections: CaseStudySection[];
  currentHref: string;
};

export function CaseStudyPage({
  heroTitle,
  year,
  role,
  company,
  timeline,
  intro,
  sections,
  currentHref,
}: CaseStudyPageProps) {
  return (
    <div className="no-gradient flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[720px] px-6 py-12 md:py-16">
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

        <section className="mt-8">
          <h1 className="text-2xl font-semibold tracking-tight">{heroTitle}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {["UX", "UI", "Case Study"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded border border-border bg-badge-bg px-2 py-0.5 font-mono text-[11px] text-badge-text"
              >
                {tag}
              </span>
            ))}
            <span className="text-sm text-muted">{year}</span>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-[140px_1fr] gap-x-6 gap-y-8">
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Role
              </p>
              <p className="mt-1">{role}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Company
              </p>
              <p className="mt-1">{company}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Timeline
              </p>
              <p className="mt-1">{timeline}</p>
            </div>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/85">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {sections.map((section) => (
          <section key={section.title} className="mt-20">
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-foreground/85">
              {section.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
            <div className="mt-10 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                {section.label}
              </div>
              <div className="aspect-[16/10] w-full rounded-lg border border-border bg-badge-bg" />
              <p className="text-sm text-muted">{section.note}</p>
            </div>

            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground/85">
              <p>
                This block is intentionally added as richer placeholder content to
                mirror a longer case study narrative.
              </p>
              <p>
                It keeps the structure ready for final write-ups, visuals, and
                implementation notes.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                {section.secondaryLabel ?? `${section.label} / Iteration`}
              </div>
              <div className="aspect-[16/10] w-full rounded-lg border border-border bg-badge-bg" />
              <p className="text-sm text-muted">
                {section.secondaryNote ??
                  "Additional placeholder visual for an intermediate exploration."}
              </p>
            </div>

            <div className="mt-10 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                {section.tertiaryLabel ?? `${section.label} / Final`}
              </div>
              <div className="aspect-[16/10] w-full rounded-lg border border-border bg-badge-bg" />
              <p className="text-sm text-muted">
                {section.tertiaryNote ??
                  "Final placeholder visual representing shipped experience direction."}
              </p>
            </div>
          </section>
        ))}

        <hr className="my-16 border-border" />

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Other projects</h2>
          <div className="mt-6 space-y-0">
            {workList
              .filter((project) => project.href !== currentHref)
              .map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="flex items-baseline justify-between gap-4 py-2.5 text-[15px] transition-opacity hover:opacity-70"
                >
                  <span>{project.title}</span>
                  <span className="text-sm text-muted">{project.company}</span>
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
