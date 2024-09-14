import React from "react";
import MainHeader from "@/components/MainHeader";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default layout;
