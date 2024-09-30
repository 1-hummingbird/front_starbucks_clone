'use client';

import { useEffect, useState } from 'react';

import LeftArrow from '@/components/icons/LeftArrow';

const TopNavBar = ({ reviewCount }: { reviewCount: number }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 0);

      const productDetail = document.getElementById('productDetail');
      const reviewList = document.getElementById('reviewList');

      if (productDetail && reviewList) {
        const productDetailPosition =
          productDetail.getBoundingClientRect().top + currentScroll;
        const reviewListPosition =
          reviewList.getBoundingClientRect().top + currentScroll;

        if (
          currentScroll >= productDetailPosition - 100 &&
          currentScroll < reviewListPosition - 100
        ) {
          setActiveSection('productDetail');
        } else if (currentScroll >= reviewListPosition - 100) {
          setActiveSection('reviewList');
        } else {
          setActiveSection(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

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
      className={`fixed left-0 top-0 z-20 w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex justify-center bg-white py-3 shadow-lg">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
          <LeftArrow />
        </div>
        <div className="flex gap-4">
          <div
            className={`cursor-pointer ${activeSection === 'productDetail' ? 'text-green-500' : ''}`}
            onClick={() => smoothScrollTo('productDetail')}
          >
            <p>정보</p>
          </div>
          <div
            className={`cursor-pointer ${activeSection === 'reviewList' ? 'text-green-500' : ''}`}
            onClick={() => smoothScrollTo('reviewList')}
          >
            <p>리뷰 {reviewCount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
