'use client';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '@/components/swiperComponent/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import AllProductIcon from './AllProductIcon';
import { FreeMode } from 'swiper/modules';
import React from 'react';
import { categories } from '@/datas/initial/categories';

function  ProductCategory() {
  return (
    <nav>
      <Swiper
        className="mt-6"
        pagination={{ el: '.swiper-pagination-custom', clickable: true }}
        modules={[FreeMode]}
        // 화면 사이즈에 따라 보여지는 슬라이드 개수 설정
        slidesPerView={3.5}
      >
        <ul className="flex">
          {categories.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <AllProductIcon key={item.id} item={item} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </nav>
  );
}

export default ProductCategory;
