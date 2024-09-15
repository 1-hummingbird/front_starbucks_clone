import React from "react";

import { Metadata } from "next";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Main",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default layout;
