"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return <p onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</p>;
};

export default SignOut;
