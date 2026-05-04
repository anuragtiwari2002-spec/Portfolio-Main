import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Bazooka App — Case Study",
  description: "Dummy case study content for Bazooka App.",
};

export default function BazookaAppPage() {
  return (
    <CaseStudyPage
      currentHref="/projects/bazooka-app"
      heroTitle="Designing Bazooka App Experience"
      year="2022 - 2023"
      role="Brand and UI/UX Designer"
      company="Bazooka App, Raipur"
      timeline="2022 - 2023"
      intro={[
        "This is dummy case study content for Bazooka App with a dedicated standalone page.",
        "The case study combines brand direction and UX execution for user and vendor-facing journeys.",
        "This expanded format keeps enough depth and vertical rhythm to match your previous detailed project pages.",
      ]}
      sections={[
        {
          title: "Brand system foundation",
          points: [
            "Established visual language, component tone, and consistency rules.",
            "Aligned product and marketing surfaces under one design direction.",
          ],
          label: "01 / Brand foundation",
          note: "Dummy visual placeholder for brand explorations.",
        },
        {
          title: "Core product flows",
          points: [
            "Designed onboarding and marketplace interaction paths.",
            "Improved conversion patterns in coupon and merchant flows.",
          ],
          label: "02 / UX flows",
          note: "Dummy visual placeholder for product journeys.",
        },
        {
          title: "Launch and optimization",
          points: [
            "Prepared launch-ready interaction patterns for key marketplace moments.",
            "Outlined iterative improvements based on early behavior and conversion trends.",
          ],
          label: "03 / Launch",
          note: "Dummy visual placeholder for launch and iteration notes.",
        },
      ]}
    />
  );
}
