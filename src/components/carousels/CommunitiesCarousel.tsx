"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";

const items = [
  { location: "MISSION, TX", name: "SPEEDY TRAILS", backgroundImage: "/subdivisions/speedy-trails.png" },
  { location: "MISSION, TX", name: "SPEEDY TRAILS", backgroundImage: "/subdivisions/speedy-trails.png" },
  { location: "MISSION, TX", name: "SPEEDY TRAILS", backgroundImage: "/subdivisions/speedy-trails.png" },
  { location: "MISSION, TX", name: "SPEEDY TRAILS", backgroundImage: "/subdivisions/speedy-trails.png" },
  { location: "MISSION, TX", name: "SPEEDY TRAILS", backgroundImage: "/subdivisions/speedy-trails.png" },
];

export default function CommunitiesCarousel() {
  return (
    <div className="w-full py-8 [--swiper-pagination-bullet-inactive-color:#64c6ff!important]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
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
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full border border-gray-300 shadow-md rounded-lg mb-10 text-center bg-cover bg-center" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                <div className="bg-black/50 p-5 text-white rounded-lg flex flex-col justify-end h-[350px]">
                    <h4>{item.location}</h4>
                    < hr className="w-1/2 mx-auto" />
                    <h3>{item.name}</h3>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
