'use client';

import React, { useRef, useState } from 'react';

const ExhibitionTopNavBar = ({
  exhibitionTitles,
}: {
  exhibitionTitles: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  };
  return (
    <div className="scrollbar-hide w-full overflow-x-auto whitespace-nowrap border-b-2 border-gray-300 bg-white pb-3 pt-1">
      <div className="flex gap-1 px-2">
        {exhibitionTitles.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleTabClick(idx)}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            className={`cursor-pointer px-2 text-sm font-medium ${
              activeIndex === idx ? 'text-green-500' : 'text-gray-700'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionTopNavBar;
