"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Home = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const url = formData.get("url");

    router.push(`/chat?url=${url}`);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-44">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        WEBSITE CHAT
      </h1>

      <form
        className="mx-auto flex w-80 flex-col gap-3"
        onSubmit={handleSubmit}
      >
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
