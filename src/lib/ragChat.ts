import { urlSchema } from "@/validators/urlSchema";
import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
});

export const checkAndIndexWebsite = async (url: string) => {
  const validatedUrl = urlSchema.parse(url);

  const isAlreadyIndexed = await redis.sismember("indexed-urls", validatedUrl);

  if (isAlreadyIndexed) {
    console.log(`Already indexed ✅ : ${validatedUrl}`);
    return;
  }

  console.log("⏳ indexing...");
  const startTimeMs = Date.now();

  const result = await ragChat.context.add({
    type: "html",
    source: validatedUrl,
    config: { chunkOverlap: 50, chunkSize: 200 },
  });

  if (!result.success) {
    throw new Error(result.error);
  }

  console.log(`Indexing took : ${Date.now() - startTimeMs} ms`);
  console.log("✅ indexing done");

  await redis.sadd("indexed-urls", validatedUrl);
};
