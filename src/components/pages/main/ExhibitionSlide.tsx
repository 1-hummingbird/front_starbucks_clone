"use client";
import { exhibitions } from "@/datas/dummy/exhibitions";
import { ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../swiperComponent/style.css";

const ExhibitionSlide = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const handleAutoplay = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance && swiperInstance.autoplay) {
      if (isAutoplay) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  return (
    <section className="w-full">
      <Swiper
        ref={swiperRef}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={true}
        modules={[Pagination, Keyboard, Autoplay]}
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
                priority 
              />
            </SwiperSlide>
          );
        })}
        <div className="swiper-footer absolute z-10 flex w-full justify-end">
          <div className="flex items-center justify-center gap-[2px] p-1 text-[14px] text-white">
            <div className="flex h-[29px] items-center bg-[#00000073] px-2">
              <button onClick={handleAutoplay} className="px-2">
                {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <div className="swiper-pagination flex px-2 py-1 text-center"></div>
            </div>
            <div className="flex w-full items-center gap-1 bg-[#00000073] px-2 py-1">
              <p>전체보기</p>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ExhibitionSlide;
