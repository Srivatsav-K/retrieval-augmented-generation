import Chat from "@/components/Chat";
import FullpageError from "@/components/FullpageError";
import { checkAndIndexWebsite } from "@/lib/ragChat";
import { urlSchema } from "@/validators/urlSchema";
import { cookies } from "next/headers";

type ChatPageProps = {
  searchParams: {
    url: string;
  };
};

const ChatPage = async ({ searchParams }: ChatPageProps) => {
  const { data: urlToIndex, error } = urlSchema.safeParse(searchParams.url);

  if (error) {
    return (
      <FullpageError title="Error" description={error.issues[0]?.message} />
    );
  }

  const sessionCookie = cookies().get("sessionId")?.value;
  const sessionId = (urlToIndex + "--" + sessionCookie).replace(/\//g, "");

  await checkAndIndexWebsite(urlToIndex);

  return <Chat sessionId={sessionId} />;
};

export default ChatPage;
