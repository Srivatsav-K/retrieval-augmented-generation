"use client";

import { Message, useChat } from "ai/react";
import { ChatInput } from "./ChatInput";
import Messages from "./Messages";

type ChatProps = {
  sessionId: string;
  initialMessages: Message[];
};
const Chat = ({ sessionId, initialMessages }: ChatProps) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });

  return (
    <div className="relative flex min-h-full flex-col justify-between gap-2 divide-y">
      <div className="flex flex-1 flex-col justify-between">
        <Messages messages={messages} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};
export default Chat;
