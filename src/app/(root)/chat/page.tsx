import Chat from "@/components/Chat";
import FullpageError from "@/components/FullpageError";
import { checkAndIndexWebsite } from "@/lib/ragChat";
import { removeTrailingSlash } from "@/utils";
import { urlSchema } from "@/validators/urlSchema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type ChatPageProps = {
  searchParams: {
    url: string;
  };
};

const ChatPage = async (props: ChatPageProps) => {
  const { data: urlToIndex, error } = urlSchema.safeParse(
    props?.searchParams?.url,
  );

  const handleRedirectToHome = async () => {
    "use server";
    redirect("/");
  };

  if (error) {
    return (
      <FullpageError
        title="Error"
        description={error.issues[0]?.message}
        showAction
        actionText="Try again"
        action={handleRedirectToHome}
      />
    );
  }

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId, sessionId } = await auth();
  const userSessionId = `${userId}-${sessionId}-${encodeURIComponent(urlToIndex)}`;

  await checkAndIndexWebsite(removeTrailingSlash(urlToIndex));

  return <Chat sessionId={userSessionId} />;
};

export default ChatPage;
