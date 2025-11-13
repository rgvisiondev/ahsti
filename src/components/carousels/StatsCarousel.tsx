"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import Counter from "../counter";

export default function StatsCarousel() {
  return (
    <div className="w-full py-8 [--swiper-pagination-bullet-inactive-color:#64c6ff!important]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        freeMode={true}
        allowTouchMove={true}
      >

          <SwiperSlide className="pb-10">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">
                <Counter end={101} />
              </h3>
              <p className="text-sm text-center">Homes <br /> Built</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-10">
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-3xl font-bold">
                  <Counter prefix="$" end={10} />
                </h3>
                <h3 className="text-3xl font-bold">
                  <Counter prefix="." end={5} suffix="M" />
                </h3>
              </div>
              <p className="text-sm text-center">Loans <br /> Originated</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-10">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold">
                <Counter end={351} />
              </h3>
              <p className="text-sm text-center">Counseling <br /> Clients</p>
            </div>
          </SwiperSlide>


      </Swiper>
    </div>
  );
}
