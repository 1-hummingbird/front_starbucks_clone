"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

import { exhibitions } from "@/datas/dummy/exhibitions";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../swiperComponent/style.css";
import Image from "next/image";

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
        {exhibitions.map((item) => {
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
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default ExhibitionSlide;
