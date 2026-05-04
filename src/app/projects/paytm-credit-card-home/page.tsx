import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Paytm Credit Card Home — Case Study",
  description: "Dummy case study content for Paytm Credit Card Home.",
};

export default function PaytmCreditCardHomePage() {
  return (
    <CaseStudyPage
      currentHref="/projects/paytm-credit-card-home"
      heroTitle="Reframing Paytm Credit Card Home"
      year="2025"
      role="Product Designer"
      company="Paytm, Noida"
      timeline="2025"
      intro={[
        "This is dummy case study content for the Paytm Credit Card Home page.",
        "The focus is on creating a high-signal home experience that helps users act quickly on dues, limits, and rewards.",
        "It follows a long-form storytelling structure similar to your earlier detailed project pages.",
      ]}
      sections={[
        {
          title: "Information hierarchy",
          points: [
            "Prioritized card-health metrics and immediate actions.",
            "Balanced utility widgets with day-to-day payment tasks.",
          ],
          label: "01 / Home architecture",
          note: "Dummy visual placeholder for IA explorations.",
        },
        {
          title: "State design system",
          points: [
            "Defined UI patterns for unpaid, due-soon, and paid states.",
            "Aligned status semantics to reduce confusion in key moments.",
          ],
          label: "02 / State handling",
          note: "Dummy visual placeholder for state variants.",
        },
        {
          title: "Performance and retention levers",
          points: [
            "Defined reusable card modules for reminders, nudges, and contextual actions.",
            "Connected design decisions to retention metrics and repeat usage hypotheses.",
          ],
          label: "03 / Retention",
          note: "Dummy visual placeholder for engagement design ideas.",
        },
      ]}
    />
  );
}
