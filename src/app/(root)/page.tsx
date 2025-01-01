import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const Home = () => {
  const redirectUser = async (formData: FormData) => {
    "use server";

    const url = formData.get("url");

    redirect(`/chat?url=${url}`);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-44">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        WEBSITE CHAT
      </h1>

      <form className="mx-auto flex w-80 flex-col gap-3" action={redirectUser}>
        <Input
          type="url"
          name="url"
          autoFocus
          placeholder="Enter a URL to chat with"
          pattern="^(https:\/\/[^\s]+)$"
          title="Enter a valid https url"
        />

        <Button type="submit">Chat</Button>
      </form>
    </div>
  );
};
export default Home;
