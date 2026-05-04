import { ThemeToggle } from "@/components/theme-toggle";
import { Clock } from "@/components/clock";
import Link from "next/link";
import type { Metadata } from "next";
import { workList } from "@/lib/work-list";

type CREDProjectProps = {
  searchParams?: {
    work?: string;
  };
};

type CaseStudyContent = {
  heroTitle: string;
  year: string;
  role: string;
  company: string;
  timeline: string;
  intro: string[];
  sections: {
    title: string;
    points: string[];
    label: string;
    note: string;
  }[];
};

const defaultWorkSlug = "paytm-reserve";

const caseStudyContentBySlug: Record<string, CaseStudyContent> = {
  "paytm-reserve": {
    heroTitle: "Designing Paytm Reserve (Dummy Case Study)",
    year: "2025",
    role: "Product Designer",
    company: "Paytm, Noida",
    timeline: "Jan 2025 - Ongoing",
    intro: [
      "This is a placeholder case study page for Paytm Reserve. The purpose is to validate page structure, navigation, and project storytelling layout.",
      "The work focuses on shaping a premium reserve experience for users with clarity in eligibility, onboarding, and account benefits.",
    ],
    sections: [
      {
        title: "Problem framing",
        points: [
          "Mapped user journeys for first-time and repeat users.",
          "Defined key funnel drop-offs and aligned with product goals.",
        ],
        label: "01 / Discovery",
        note: "Dummy visual placeholder for discovery artifacts.",
      },
      {
        title: "Flow and information hierarchy",
        points: [
          "Created modular screens for benefit exploration and setup.",
          "Established state-based UI behavior for edge cases.",
        ],
        label: "02 / UX flow",
        note: "Dummy visual placeholder for final flow.",
      },
    ],
  },
  "paytm-postpaid": {
    heroTitle: "Improving Paytm Postpaid (Dummy Case Study)",
    year: "2025",
    role: "Product Designer",
    company: "Paytm, Noida",
    timeline: "Jan 2025 - Ongoing",
    intro: [
      "This placeholder page demonstrates a Postpaid case-study template using realistic structure and hierarchy.",
      "The direction prioritizes faster activation, better repayment clarity, and reduced confusion across billing states.",
    ],
    sections: [
      {
        title: "Activation optimization",
        points: [
          "Simplified onboarding screens into a guided sequence.",
          "Reduced cognitive load with contextual assistance and hints.",
        ],
        label: "01 / Onboarding",
        note: "Dummy visual placeholder for onboarding screens.",
      },
      {
        title: "Repayment experience",
        points: [
          "Introduced progressive disclosure for bill details.",
          "Designed transparent due-date communication patterns.",
        ],
        label: "02 / Repayment",
        note: "Dummy visual placeholder for repayment design.",
      },
    ],
  },
  "paytm-lamf": {
    heroTitle: "Paytm LAMF Experience (Dummy Case Study)",
    year: "2025",
    role: "Product Designer",
    company: "Paytm, Noida",
    timeline: "Jan 2025 - Ongoing",
    intro: [
      "This is a placeholder page for Loans Against Mutual Funds in the same storytelling format as other work pages.",
      "It covers education, trust, and conversion moments across eligibility checks, loan configuration, and application completion.",
    ],
    sections: [
      {
        title: "Education and trust",
        points: [
          "Built explanation blocks around risk and repayment context.",
          "Introduced confidence cues using compliant content patterns.",
        ],
        label: "01 / Trust layer",
        note: "Dummy visual placeholder for education modules.",
      },
      {
        title: "Application funnel",
        points: [
          "Streamlined data capture and prefilled known fields.",
          "Designed progress visibility for longer multistep journeys.",
        ],
        label: "02 / Application",
        note: "Dummy visual placeholder for application flow.",
      },
    ],
  },
  "paytm-credit-card-home": {
    heroTitle: "Paytm Credit Card Home (Dummy Case Study)",
    year: "2025",
    role: "Product Designer",
    company: "Paytm, Noida",
    timeline: "Jan 2025 - Ongoing",
    intro: [
      "This placeholder case study models the Credit Card Home narrative and interaction approach.",
      "The focus area is surfacing the right card actions, payment status, and contextual nudges within a compact home surface.",
    ],
    sections: [
      {
        title: "Home IA redesign",
        points: [
          "Prioritized top actions using intent-based hierarchy.",
          "Balanced utility widgets with actionable summaries.",
        ],
        label: "01 / IA",
        note: "Dummy visual placeholder for home IA options.",
      },
      {
        title: "Actionability and states",
        points: [
          "Designed clear treatment for unpaid, due, and paid states.",
          "Improved consistency in CTA labels and state responses.",
        ],
        label: "02 / States",
        note: "Dummy visual placeholder for state system.",
      },
    ],
  },
  "plus-gold-app": {
    heroTitle: "Plus Gold App (Dummy Case Study)",
    year: "2023 - 2024",
    role: "Founding Designer",
    company: "Plus Gold, Bangalore",
    timeline: "Nov 2023 - Dec 2024",
    intro: [
      "This dummy page represents a 0 to 1 consumer app journey for Plus Gold.",
      "It showcases how product direction evolved from MVP to scaled versions while balancing user trust and business growth.",
    ],
    sections: [
      {
        title: "V1 to V3 progression",
        points: [
          "Structured roadmap around core savings and redemption loops.",
          "Iterated quickly with a data-informed release cadence.",
        ],
        label: "01 / Product evolution",
        note: "Dummy visual placeholder for version comparison.",
      },
      {
        title: "Partner and redemption flows",
        points: [
          "Aligned user and jeweler touchpoints end-to-end.",
          "Reduced friction in discovery, validation, and handoff.",
        ],
        label: "02 / Ecosystem flow",
        note: "Dummy visual placeholder for partner journeys.",
      },
    ],
  },
  "bazooka-app": {
    heroTitle: "Bazooka App (Dummy Case Study)",
    year: "2022 - 2023",
    role: "Brand and UI/UX Designer",
    company: "Bazooka App, Raipur",
    timeline: "Jul 2022 - Oct 2023",
    intro: [
      "This placeholder case study captures the launch-phase product and brand direction for Bazooka App.",
      "The work combines visual language creation with practical UX flows for users and vendor partners.",
    ],
    sections: [
      {
        title: "Brand and visual language",
        points: [
          "Defined typography, color, and component expression rules.",
          "Created cohesive direction for app and marketing surfaces.",
        ],
        label: "01 / Brand system",
        note: "Dummy visual placeholder for style explorations.",
      },
      {
        title: "Core user flows",
        points: [
          "Designed onboarding and merchant discovery interactions.",
          "Improved conversion touchpoints in coupon flow patterns.",
        ],
        label: "02 / Product UX",
        note: "Dummy visual placeholder for key user flows.",
      },
    ],
  },
};

function getCurrentWorkSlug(searchParams?: { work?: string }) {
  return searchParams?.work || defaultWorkSlug;
}

function getCurrentHref(workSlug: string) {
  return `/projects/cred?work=${workSlug}`;
}

function getCaseStudyContent(workSlug: string) {
  return (
    caseStudyContentBySlug[workSlug] ?? caseStudyContentBySlug[defaultWorkSlug]
  );
}

export function generateMetadata({ searchParams }: CREDProjectProps): Metadata {
  const workSlug = getCurrentWorkSlug(searchParams);
  const content = getCaseStudyContent(workSlug);

  return {
    title: `${content.heroTitle} — Anurag`,
    description: content.intro[0],
  };
}

export default function CREDProject({ searchParams }: CREDProjectProps) {
  const workSlug = getCurrentWorkSlug(searchParams);
  const currentHref = getCurrentHref(workSlug);
  const content = getCaseStudyContent(workSlug);

  return (
    <div className="no-gradient flex min-h-screen flex-col items-center bg-background">
      <div className="w-full max-w-[640px] px-6 py-12 md:py-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
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

        {/* Title & Meta */}
        <section className="mt-8">
          <h1 className="text-2xl font-semibold tracking-tight">{content.heroTitle}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {["UX", "UI", "Dev"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded border border-border bg-badge-bg px-2 py-0.5 font-mono text-[11px] text-badge-text"
              >
                {tag}
              </span>
            ))}
            <span className="text-sm text-muted">{content.year}</span>
          </div>
        </section>

        {/* Sidebar-style metadata + Intro */}
        <div className="mt-10 grid grid-cols-[140px_1fr] gap-x-6 gap-y-8">
          {/* Left column — meta */}
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Role
              </p>
              <p className="mt-1">{content.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Company
              </p>
              <p className="mt-1">{content.company}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted/70">
                Timeline
              </p>
              <p className="mt-1">{content.timeline}</p>
            </div>
          </div>

          {/* Right column — intro text */}
          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/85">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {content.sections.map((section) => (
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
          </section>
        ))}

        {/* Divider */}
        <hr className="my-16 border-border" />

        {/* Other projects */}
        <section>
          <h2 className="text-lg font-semibold tracking-tight">
            Other projects
          </h2>
          <div className="mt-6 space-y-0">
            {workList
              .filter((project) => project.href !== currentHref)
              .map((project, i) => (
                <Link
                  key={i}
                  href={project.href}
                  className="flex items-baseline justify-between gap-4 py-2.5 text-[15px] transition-opacity hover:opacity-70"
                >
                  <span>{project.title}</span>
                  <span className="text-sm text-muted">{project.company}</span>
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
