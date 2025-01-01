import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
  return (
    <header className="flex justify-end px-5 py-2">
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
};
export default Header;
