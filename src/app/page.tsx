import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";
import Image from "next/image";
import Link from "next/link";
import { workList } from "@/lib/work-list";

export default function Home() {
  return (
    <div className="home-gradient flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight">Anurag</h1>
          <ThemeToggle />
        </header>

        {/* Avatar */}
        <div className="mt-10">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-border">
            <Image
              src="/profile-photo.png"
              alt="Anurag"
              width={48}
              height={48}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Hi, I&apos;m Anurag.
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/85">
            <p>
              I&apos;m a Product Designer with 4+ years of experience leading
              end-to-end product initiatives in fast-paced environments. I
              combine creative thinking with analytical problem solving to ship
              impactful experiences and measurable business outcomes.
            </p>

            <p>
              At Paytm, I lead 0→1 initiatives across lending and wealth,
              including Postpaid, Loans Against Mutual Funds, Paytm Reserve,
              and international merchant lending (UAE). I have also improved
              onboarding and funnel journeys for Personal Loans and Credit Card
              marketplace experiences.
            </p>

            <p>
              Previously, as Founding Designer at Plus Gold, I built the core
              app across multiple versions, scaled the design team from 1→5,
              and designed systems powering users, jewelers, and platform
              operations. Before that, I led brand and UI/UX at Bazooka App.
            </p>

            <p>
              Comfortable owning ambiguity and working with cross-functional
              teams to translate complex constraints into elegant, scalable
              products. Outside design, I travel, run, and{" "}
              <span className="inline-flex items-center rounded border border-border bg-badge-bg px-1.5 py-0.5 font-mono text-xs text-badge-text">
                stay curious.
              </span>
            </p>
          </div>

          {/* Contact */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 text-[15px]">
            <span>Reach me at</span>
            <a
              href="https://twitter.com/anruagtiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded border border-border bg-badge-bg px-2 py-0.5 font-mono text-xs text-badge-text transition-colors hover:bg-border"
            >
              @ANRUAGTIWARI
            </a>
            <span>or</span>
            <a
              href="mailto:work.anuragtiwari@gmail.com"
              className="inline-flex items-center rounded border border-border bg-badge-bg px-2 py-0.5 font-mono text-xs text-badge-text transition-colors hover:bg-border"
            >
              WORK.ANURAGTIWARI@GMAIL.COM
            </a>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-12 border-border" />

        {/* Work */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Work</h2>
            <Link href="/work" className="text-sm text-muted hover:text-foreground">
              View all
            </Link>
          </div>

          <div className="mt-8 space-y-0">
            {workList.map((project, i) => (
              <Link
                key={i}
                href={project.href}
                className="group flex items-baseline gap-4 py-3 text-[15px] transition-opacity hover:opacity-70"
              >
                <span className="w-24 shrink-0 text-sm text-muted">
                  {project.year}
                </span>
                <span className="flex-1">{project.title}</span>
                <span className="shrink-0 text-sm text-muted">
                  {project.company}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer divider */}
        <div className="mt-12 mb-8">
          <div className="h-px w-12 bg-foreground" />
        </div>

        {/* Footer */}
        <footer className="pb-8">
          <Clock />
        </footer>
      </div>
    </div>
  );
}
