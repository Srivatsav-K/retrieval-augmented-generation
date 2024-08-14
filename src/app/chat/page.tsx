import Chat from "@/components/Chat";
import { ragChat } from "@/lib/ragChat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

type ChatPageProps = {
  searchParams: {
    url: string;
  };
};

const ChatPage = async ({ searchParams }: ChatPageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;

  const resconstructedUrl = searchParams.url;

  const sessionId = (resconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    "",
  );

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    resconstructedUrl,
  );

  console.log("🚀 ~ page ~ isAlreadyIndexed:", isAlreadyIndexed);

  if (!isAlreadyIndexed) {
    console.log("⏳ indexing...");

    await ragChat.context.add({
      type: "html",
      source: resconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });

    console.log("✅ indexing done");

    await redis.sadd("indexed-urls", resconstructedUrl);
  }

  return <Chat sessionId={sessionId} />;
};

export default ChatPage;
