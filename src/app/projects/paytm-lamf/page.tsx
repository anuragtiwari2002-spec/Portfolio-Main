import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Paytm LAMF — Case Study",
  description: "Dummy case study content for Paytm LAMF.",
};

export default function PaytmLamfPage() {
  return (
    <CaseStudyPage
      currentHref="/projects/paytm-lamf"
      heroTitle="Designing Paytm LAMF Experience"
      year="2025"
      role="Product Designer"
      company="Paytm, Noida"
      timeline="2025"
      intro={[
        "This is dummy case study content for Paytm LAMF with a dedicated page and unique narrative.",
        "The case study focuses on trust-building, education, and completing multistep lending flows with confidence.",
        "The content is intentionally expanded to match a fuller long-scroll case study structure.",
      ]}
      sections={[
        {
          title: "Trust and explainability",
          points: [
            "Built explanation layers for loan terms and risk communication.",
            "Introduced concise microcopy for key decision checkpoints.",
          ],
          label: "01 / Trust layer",
          note: "Dummy visual placeholder for educational content.",
        },
        {
          title: "Application flow optimization",
          points: [
            "Simplified sequence from eligibility to confirmation.",
            "Reduced abandonment by improving form logic and progression cues.",
          ],
          label: "02 / Application funnel",
          note: "Dummy visual placeholder for application screens.",
        },
        {
          title: "Validation and rollout",
          points: [
            "Created rollout checkpoints for legal and compliance review touchpoints.",
            "Mapped post-launch success metrics and funnel health indicators.",
          ],
          label: "03 / Rollout",
          note: "Dummy visual placeholder for validation and launch plan.",
        },
      ]}
    />
  );
}
