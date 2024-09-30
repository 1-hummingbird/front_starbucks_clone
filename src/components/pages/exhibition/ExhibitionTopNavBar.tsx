'use client';

import { useRef, useState } from 'react';

import ExhibitionImage from './ExhibitionImage';
import { ExhibitionListType } from '@/types/responseType';
import ExhibitionProductList from './ExhibitionProductList';

const ExhibitionTopNavBar = ({
  exhibitionList,
}: {
  exhibitionList: ExhibitionListType[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const exhibitionTitles = exhibitionList.map((exhibition) => exhibition.name);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  };

  return (
    <section>
      <section className="w-full overflow-x-auto whitespace-nowrap border-b-2 border-gray-300 bg-white pb-3 pt-1 scrollbar-hide">
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
      </section>
      {activeIndex !== null && (
        <div className="flex flex-col gap-2">
          <ExhibitionImage id={exhibitionList[activeIndex].id} />
          <ExhibitionProductList id={exhibitionList[activeIndex].id} />
        </div>
      )}
    </section>
  );
};

export default ExhibitionTopNavBar;
