'use client';

import React, { useState } from 'react';

const ExhibitionTopNavBar = ({
  exhibitionTitles,
}: {
  exhibitionTitles: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index); // 클릭한 탭의 인덱스를 상태로 설정
  };
  return (
    <div className="scrollbar-hide w-full overflow-x-auto whitespace-nowrap border-b-2 border-gray-300 bg-white pb-3 pt-1">
      <div className="flex gap-1 px-2">
        {exhibitionTitles.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={`cursor-pointer px-2 text-sm font-medium ${
              activeIndex === idx ? 'text-green-500' : 'text-gray-700'
            }`} // hover 클래스를 제거하여 클릭 시 색상이 바로 변하게 설정
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionTopNavBar;
