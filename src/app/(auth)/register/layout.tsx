import React from "react";

import { Metadata } from "next";
import AuthHeader from "@/components/AuthHeader";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader title="회원가입" />
      {children}
    </>
  );
};

export default RegisterLayout;
