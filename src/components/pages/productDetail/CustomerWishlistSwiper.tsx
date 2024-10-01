'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiperComponent/style.css';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

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
        <SwiperSlide key={product.id}>
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="flex h-[221px] w-[112px] flex-col items-start">
              <Image
                src={`${product.thumbnail}`}
                alt={`${product.title}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '112px', height: '112px' }}
              />
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                {product.title}
              </p>
              {product.discountedPrice ? (
                <div className="flex gap-1">
                  <p className="text-2xl text-red-600">
                    {product.discountRate}%
                  </p>
                  <p className="overflow-hidden text-[16px] font-bold">
                    {product.discountedPrice}원
                  </p>
                </div>
              ) : (
                <p className="text-[16px] font-bold">
                  {product.defaultPrice}원
                </p>
              )}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerWishlistSwiper;
