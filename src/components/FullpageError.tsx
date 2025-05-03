"use client";

import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typogrphy-p";

type Props = {
  title: string;
  description?: string;
  showAction?: true;
  actionText?: string;
  action?: () => void;
};
const FullpageError = ({
  title,
  description,
  action,
  actionText,
  showAction,
}: Props) => {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-3">
      <TypographyH1 className="text-center font-bold">{title}</TypographyH1>

      <TypographyP className="text-center text-muted-foreground">
        {description}
      </TypographyP>

      {showAction && (
        <Button onClick={() => action?.()} size={"sm"}>
          {actionText ?? "Try again"}
        </Button>
      )}
    </div>
  );
};
export default FullpageError;
