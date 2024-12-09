import { cn } from "utils/cn";
import { IconBump } from "./components/Icons";
import { FooterSection } from "./sections/FooterSection";

/** Entry point of landing page content */
export function Landing() {
  return (
    <main className="landing-page bg-background-primary text-text-primary font-landing">
      <div className="fit">

      </div>
      <FooterSection />
    </main>
  );
}

interface DividerProps {
  className?: string;
}

function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "flex items-end h-7 border-t-border-divider border-t-100",
        className,
      )}
    >
      <div className="h-px w-1/6 border-b-border-divider border-b-100" />
      <IconBump className="shrink-0 text-border-divider" />
      <div className="h-px w-full border-b-border-divider border-b-100" />
    </div>
  );
}
