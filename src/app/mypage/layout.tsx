import React from "react";

import { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import TopNavigationBar from "@/components/TopNavigationBar";

export const metadata: Metadata = {
  title: "Main",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      <TopNavigationBar />
      {children}
    </>
  );
};

export default layout;
