"use client";

import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typogrphy-p";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //TODO Log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-3">
      <TypographyH1 className="text-center font-bold">
        Something went wrong!
      </TypographyH1>

      <TypographyP className="text-center text-muted-foreground">
        An unexpected error has occurred. Please try again later
      </TypographyP>

      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size={"sm"}
      >
        Try again
      </Button>
    </div>
  );
}
