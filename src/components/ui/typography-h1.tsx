import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyPProps {
  children: ReactNode;
  className?: string;
}
export function TypographyH1({
  children,
  className: customClass,
}: TypographyPProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
        customClass,
      )}
    >
      {children}
    </h1>
  );
}
