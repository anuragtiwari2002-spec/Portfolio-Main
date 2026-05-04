import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Paytm Postpaid — Case Study",
  description: "Dummy case study content for Paytm Postpaid.",
};

export default function PaytmPostpaidPage() {
  return (
    <CaseStudyPage
      currentHref="/projects/paytm-postpaid"
      heroTitle="Improving Paytm Postpaid"
      year="2025"
      role="Product Designer"
      company="Paytm, Noida"
      timeline="2025"
      intro={[
        "This is dummy case study content for Paytm Postpaid with dedicated structure and narrative.",
        "The work focuses on reducing funnel drop-offs across activation, usage clarity, and bill repayment touchpoints.",
        "The page structure mirrors a long-form case study format so it can be directly replaced with final project details later.",
      ]}
      sections={[
        {
          title: "Activation and onboarding",
          points: [
            "Restructured onboarding into a guided sequence with clearer progress.",
            "Reduced friction by introducing contextual help and copy improvements.",
          ],
          label: "01 / Onboarding",
          note: "Dummy visual placeholder for onboarding journey.",
        },
        {
          title: "Bill clarity and repayment",
          points: [
            "Designed repayment states for due, partial, and completed payments.",
            "Improved visibility of due-date urgency and next-best actions.",
          ],
          label: "02 / Repayment flow",
          note: "Dummy visual placeholder for repayment interactions.",
        },
        {
          title: "Experimentation and outcomes",
          points: [
            "Prepared A/B-ready variants for bill summary card composition.",
            "Defined measurable UX outcomes around task completion and repayment confidence.",
          ],
          label: "03 / Outcomes",
          note: "Dummy visual placeholder for experiment snapshots.",
        },
      ]}
    />
  );
}
