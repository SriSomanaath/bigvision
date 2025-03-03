import { CarouselSpacing } from "@/components/sections/main-page/caresoul";
import { TimelineDemo } from "@/components/sections/main-page/changelog";
import ClientLabel from "@/components/sections/main-page/client-label";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/sections/main-page/counsaulting";
import { Hero1 } from "@/components/sections/main-page/hero";
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
    </>
  );
}
