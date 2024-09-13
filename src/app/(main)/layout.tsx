import React from "react";

import { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import BottomNavigationBar from "@/components/BottomNavigationBar";
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
      <BottomNavigationBar />
    </>
  );
};

export default layout;
