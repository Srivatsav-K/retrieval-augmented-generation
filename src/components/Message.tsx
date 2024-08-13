import { cn } from "@/lib/utils";
import { User as UserIcon, Bot as BotIcon } from "lucide-react";

type MessageProps = {
  content: string;
  isUserMessage: boolean;
};
const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div>
      <div className="p-6">
        <div className="mx-auto flex max-w-3xl items-start gap-2.5">
          <div
            className={cn(
              "flex aspect-square size-10 shrink-0 items-center justify-center rounded-full border",
            )}
          >
            {isUserMessage ? (
              <UserIcon className="size-5" />
            ) : (
              <BotIcon className="size-5" />
            )}
          </div>

          <div className="ml-6 flex w-full flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-l text-muted-foreground">
                {isUserMessage ? "You" : "AI"}
              </span>
            </div>

            <p className="leading-7 [&:not(:first-child)]:mt-6">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
