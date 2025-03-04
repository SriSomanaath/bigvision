import { CTA1 } from "@/components/common/banner";
import { CarouselSpacing } from "@/components/sections/main-page/caresoul";
import { TimelineDemo } from "@/components/sections/main-page/changelog";
import ClientLabel from "@/components/sections/main-page/client-label";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/sections/main-page/counsaulting";
import { Footer1 } from "@/components/common/footer";
import { Hero1 } from "@/components/common/hero";
import { PricingSectionDemo } from "@/components/sections/main-page/workspace";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import React from "react";
import { AnimatedBeamDemo } from "@/components/sections/consulting/timeline";
import { Feature197Demo } from "@/components/case-studies/caseStudies";

export default function Home() {
  return (
    <>
      <Hero1
        // badge="🚀 New Feature!"
        heading="We Think Deep.
        We Research Hard.
        We Move Fast."
        description="We build end-to-end solutions in AI, Computer Vision & Deep Learning."
        image={{
          src: "/your-image.jpg",
          alt: "Custom Hero Image",
        }}
      />
      <Feature197Demo />
      <CTA1 />
      <Footer1 />
    </>
  );
}
