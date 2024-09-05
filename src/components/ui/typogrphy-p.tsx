import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

interface TypographyPProps {
  children: ReactNode;
  className?: string;
}
export function TypographyP({
  children,
  className: customClass,
}: TypographyPProps) {
  return (
    <p
      className={cn(
        "text-sm leading-7 sm:text-lg [&:not(:first-child)]:mt-6",
        customClass,
      )}
    >
      {children}
    </p>
  );
}
