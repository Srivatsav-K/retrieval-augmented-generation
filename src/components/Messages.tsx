import { type Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

type MessagesProps = {
  messages: TMessage[];
};
const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8" />

          <h3 className="text-xl font-semibold">You&apos;re all set!</h3>

          <p className="text-sm">Ask your first question to get started.</p>
        </div>
      )}
    </div>
  );
};
export default Messages;
