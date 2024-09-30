import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="font-nanum flex items-center justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-xs">전체 보기</p>
    </div>
  );
};

export default SectionTitle;
