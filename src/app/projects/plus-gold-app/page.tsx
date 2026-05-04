import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Plus Gold App — Case Study",
  description: "Dummy case study content for Plus Gold App.",
};

export default function PlusGoldAppPage() {
  return (
    <CaseStudyPage
      currentHref="/projects/plus-gold-app"
      heroTitle="Building Plus Gold App from 0 to 1"
      year="2023 - 2024"
      role="Founding Designer"
      company="Plus Gold, Bangalore"
      timeline="2023 - 2024"
      intro={[
        "This is dummy case study content for the Plus Gold App with independent page structure.",
        "It highlights the product journey from early MVP to multiple iterations while scaling user trust and redemption operations.",
        "The narrative and block structure are expanded to feel closer to a complete portfolio case study page.",
      ]}
      sections={[
        {
          title: "MVP to growth iterations",
          points: [
            "Planned V1 to V3 releases around core savings behavior.",
            "Created feedback loops for quick iteration after launch.",
          ],
          label: "01 / Product evolution",
          note: "Dummy visual placeholder for version progression.",
        },
        {
          title: "Ecosystem design",
          points: [
            "Mapped user, partner, and operations touchpoints end-to-end.",
            "Improved redemption and handoff clarity across stakeholders.",
          ],
          label: "02 / Platform ecosystem",
          note: "Dummy visual placeholder for ecosystem flows.",
        },
        {
          title: "Team and design operations",
          points: [
            "Established repeatable critique and handoff rhythms for faster product delivery.",
            "Documented scalable UI patterns to support new features consistently.",
          ],
          label: "03 / Design ops",
          note: "Dummy visual placeholder for team process artifacts.",
        },
      ]}
    />
  );
}
