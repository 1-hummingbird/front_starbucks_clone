import React from "react";

import AuthHeader from "@/components/AuthHeader";
import "../../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn",
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader title="로그인" />
      {children}
    </>
  );
};

export default SignInLayout;
