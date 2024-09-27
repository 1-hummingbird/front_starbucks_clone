'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiperComponent/style.css';

import { Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { ProductImagesType } from '@/types/responseType';
import { useRef } from 'react';

interface ProductImagesProps {
  images: ProductImagesType[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className="h-[400px] w-full">
      <Swiper
        ref={swiperRef}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[Pagination, Keyboard]}
        loop={true}
      >
        {images.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image
                src={image.url}
                width={400}
                height={400}
                alt={`Product image ${idx + 1}`}
                className="w-full"
                priority
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ProductImages;
