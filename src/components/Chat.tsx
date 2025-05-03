"use client";

import { useChat } from "ai/react";
import { ChatInput } from "./ChatInput";
import FullpageError from "./FullpageError";
import Messages from "./Messages";

type ChatProps = {
  sessionId: string;
};
const Chat = ({ sessionId }: ChatProps) => {
  const { messages, handleInputChange, handleSubmit, input, setInput, error } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
    });

  if (error) {
    return (
      <FullpageError
        title="Something went wrong"
        description={"There was an error with the llm provider"}
        showAction
        action={() => {
          window.location.reload();
        }}
      />
    );
  }

  return (
    <div className="flex min-h-full flex-col justify-between gap-2 divide-y">
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
