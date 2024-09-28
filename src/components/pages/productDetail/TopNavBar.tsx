'use client';
import LeftArrow from '@/components/icons/LeftArrow';
import React, { useEffect, useState } from 'react';

const TopNavBar = ({ reviewCount }: { reviewCount: number }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  console.log('🚀 ~ TopNavBar ~ isVisible:', isVisible);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(true);
    }
  };

  return (
    <nav className={`sticky top-0 z-10 w-full ${isVisible ? '' : 'hidden'}`}>
      <div className="flex justify-between bg-white p-3 px-4 shadow-lg">
        <div>
          <LeftArrow />
        </div>
        <div className="flex gap-10">
          <div
            className="cursor-pointer"
            onClick={() => smoothScrollTo('productDetail')}
          >
            <p>정보</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => smoothScrollTo('reviewList')}
          >
            <p>리뷰 {reviewCount}</p>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default TopNavBar;
