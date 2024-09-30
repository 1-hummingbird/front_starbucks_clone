'use client';

import { useEffect, useState } from 'react';

import LeftArrow from '@/components/icons/LeftArrow';

const TopNavBar = ({ reviewCount }: { reviewCount: number }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      let offsetPosition;

      if (id === 'productDetail') {
        offsetPosition = elementPosition - 20;
      } else {
        offsetPosition = elementPosition - 55;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsVisible(true);
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ zIndex: 10 }}
    >
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
