import { ragChat } from "@/lib/ragChat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { messages, sessionId } = await req.json();

    const lastMessage = messages?.at(-1)?.content;

    const response = await ragChat.chat(lastMessage, {
      streaming: true,
      sessionId,
    });

    return aiUseChatAdapter(response);
  } catch (e: any) {
    console.error(e);

    return NextResponse.json(
      {
        name: e?.name,
        message: e?.message,
      },
      { status: e.status ?? 500 },
    );
  }
};
