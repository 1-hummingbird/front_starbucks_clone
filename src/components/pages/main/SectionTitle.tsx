import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center mx-4 font-nanum">
      <h1>{title}</h1>
      <p className="text-xs">전체 보기</p>
    </div>
  );
};

export default SectionTitle;
