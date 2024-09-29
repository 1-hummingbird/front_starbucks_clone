'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiperComponent/style.css';

interface CustomerWishlistSwiperProps {
  id: number;
  defaultPrice: string;
  discountedPrice: string | boolean;
  thumbnail: string;
  title: string;
  discountRate: number;
}

const CustomerWishlistSwiper = ({
  products,
}: {
  products: CustomerWishlistSwiperProps[];
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper ref={swiperRef} slidesPerView={3}>
      {products.map((product) => (
        <SwiperSlide>
          <div className="h-[221px] w-[112px]">
            <Image
              src={`${product.thumbnail}`}
              alt={`${product.title}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '112px', height: '112px' }}
            />
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              {product.title}
            </p>
            {product.discountedPrice ? (
              <div className="flex gap-1">
                <p className="text-2xl text-red-600">{product.discountRate}%</p>
                <p className="overflow-hidden font-bold">
                  {product.discountedPrice}원
                </p>
              </div>
            ) : (
              <p className="font-bold">{product.defaultPrice}원</p>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerWishlistSwiper;