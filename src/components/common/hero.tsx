import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlickeringGridDemo } from "@/components/ui/demo";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1: React.FC<Hero1Props> = ({ badge, heading, description, buttons, image }) => {
  return (
    <section className="py-28">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && <Badge className="mb-4">{badge}</Badge>}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button asChild className="w-full sm:w-auto bg-[#1e1e1e] text-[#ffffff]">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url} className="flex items-center gap-2">
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          {/* Right Section (Image & Effect) */}
          <div className="relative flex justify-center">
            <FlickeringGridDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
