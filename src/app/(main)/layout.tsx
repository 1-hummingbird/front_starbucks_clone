import React from "react";

import BottomNavigationBar from "@/components/BottomNavigationBar";
import MainHeader from "@/components/MainHeader";
import TopNavigationBar from "@/components/TopNavigationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      <TopNavigationBar />
      {children}
      <BottomNavigationBar />
    </>
  );
};

export default layout;
