import React from "react";
import LeftArrow from "./icons/LeftArrow";

const AuthHeader = ({ title }: { title: string }) => {
  return (
    <header className="flex mt-6 mx-4">
      <div className="absolute  top-[26px] left-8">
        <LeftArrow />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p>{title}</p>
      </div>
    </header>
  );
};

export default AuthHeader;
