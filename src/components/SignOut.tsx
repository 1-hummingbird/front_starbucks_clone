"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <section className="flex gap-4 pl-2">
      <LogOut size={24} />
      <p onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</p>
    </section>
  );
};

export default SignOut;
