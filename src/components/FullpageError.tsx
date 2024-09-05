import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typogrphy-p";

type Props = {
  title: string;
  description?: string;
};
const FullpageError = ({ title, description }: Props) => {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-3">
      <TypographyH1 className="text-center font-bold">{title}</TypographyH1>

      <TypographyP className="text-center text-muted-foreground">
        {description}
      </TypographyP>
    </div>
  );
};
export default FullpageError;
