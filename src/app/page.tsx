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

export default function Home() {
  return (
    <>
      <Hero1
        // badge="🚀 New Feature!"
        heading="Go to market, supercharged by AI."
        description="We provide consulting services in AI, Computer Vision & Deep Learning."
        buttons={{
          primary: {
            text: "Learn More",
            url: "/learn-more",
          },
          secondary: {
            text: "Get Started",
            url: "/get-started",
          },
        }}
        image={{
          src: "/your-image.jpg",
          alt: "Custom Hero Image",
        }}
      />
      <ClientLabel />
      <FeaturesSectionWithHoverEffectsDemo />
      <TimelineDemo />
      <CarouselSpacing />
      <PricingSectionDemo />
      <CTA1 />
      <Footer1 />
    </>
  );
}
