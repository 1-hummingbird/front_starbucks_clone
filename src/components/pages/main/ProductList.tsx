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
import useBreakpointValue from "@/hooks/useBreakpointValue";

const ProductList = ({ items }: { items: Product[] }) => {
  const value = useBreakpointValue(
    {
      md: 3,
      lg: 4,
      xl: 5,
    },
    2,
  );

  return (
    <Swiper
      className="mt-6"
      pagination={{ el: ".swiper-pagination-custom", clickable: true }}
      modules={[Pagination, Grid]}
      grid={{
        rows: 2,
        fill: "row",
      }}
      slidesPerView={value}
      slidesPerGroup={value}
      spaceBetween={10}
    >
      {items.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link
              className="flex w-full flex-col items-center"
              href={item.link}
            >
              <Image
                src={item.icon.media}
                alt="product"
                width={186}
                height={186}
              />
              <p className="mt-2 w-32 text-xs">{item.name}</p>
            </Link>
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination-custom"></div>
    </Swiper>
  );
};

export default ProductList;
