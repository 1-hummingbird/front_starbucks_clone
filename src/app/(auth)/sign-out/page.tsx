"use client";
import React from "react";
import { signOut } from "next-auth/react";

const page = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>로그아웃</button>
  );
};

export default page;
