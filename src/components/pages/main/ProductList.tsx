"use client";
import { Product } from "@/app/types/responseType";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "../../swiperComponent/style.css";

import { Grid, Pagination } from "swiper/modules";
import Image from "next/image";

const ProductList = ({ items }: { items: Product[] }) => {
  return (
    <Swiper
      className="mt-6"
      pagination={{ el: ".swiper-pagination-custom", clickable: true }}
      modules={[Pagination, Grid]}
      grid={{
        rows: 2,
        fill: "row",
      }}
      slidesPerView={2}
      slidesPerGroup={2}
      spaceBetween={10}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link
              className="w-full flex flex-col items-center "
              href={item.link}
            >
              <Image
                src={item.icon.media}
                alt="product"
                width={186}
                height={186}
              />
              <p className="w-32 mt-2 text-xs">{item.name}</p>
            </Link>
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination-custom"></div>
    </Swiper>
  );
};

export default ProductList;
