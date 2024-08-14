import { ragChat } from "@/lib/ragChat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const maxDuration = 60;

export const POST = async (req: NextRequest) => {
  const { messages, sessionId } = await req.json();

  const lastMessage = messages?.at(-1)?.content;

  const response = await ragChat.chat(lastMessage, {
    streaming: true,
    sessionId,
  });

  return aiUseChatAdapter(response);
};
