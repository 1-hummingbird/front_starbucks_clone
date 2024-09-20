import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <>{children}</>;
};

export default layout;
