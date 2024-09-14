"use client";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { exhibitions } from "@/datas/dummy/exhibitions";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../swiperComponent/style.css";

const ExhibitionSlide = () => {
  return (
    <section className="w-full">
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        }}
        navigation={true}
        keyboard={true}
        modules={[Pagination, Navigation, Keyboard]}
        loop={true}
        className="w-full"
      >
        {exhibitions.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                src={item.img}
                alt="exhibition image"
                width={0}
                height={0}
                sizes="100vh"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          );
        })}
        <div className="flex w-full swiper-footer absolute z-10 justify-end">
          <div className="flex gap-1 bg-[#00000073]">
            <div className="swiper-pagination flex text-white swiper-pagination-static px-4"></div>
            <div className="text-white px-2">전체보기</div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ExhibitionSlide;
