"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";

const items = [
  { quote: "The people that work at this place are very helpful very professional and most of all they're very friendly I could not be more happy with the experience with them", name: "- Jamie Lee Sphere" },
  { quote: "Very good attention, excellent service from the entire team. Overall, they are very friendly and have extensive knowledge and criteria for purchasing a home.", name: "- Maribel Pérez" },
  { quote: "Afforable Homes of South Texas staff are Awesome and Very Professional in Helping the New Home Owner Understand all the Responsibilities of Owning a Beautiful Home!!", name: "- Seferino Villarreal" },
  { quote: "Awesome friendly service from everybody, helpful always and always ready to assist in helping you become a home owner", name: "- Juan Jimenez" },
  { quote: "Staff gave us great information about what we as future home buyers needed to do to prepare for purchasing a new home.", name: "- D. Jackson" },
  { quote: "it's been two year's that we moved in to our beautiful home ... Thank you Affordable Home's for making out dream come true", name: "- Roxana M Sanchez" },
];

export default function TestimonialCarousel() {
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
        breakpoints={{
    0: {
      slidesPerView: 1, //  mobile
    },
    640: {
      slidesPerView: 1.5, //  small tablets
    },
    768: {
      slidesPerView: 2, //  tablets
    },
    1024: {
      slidesPerView: 3, //  desktop
    },
  }}

      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white w-full border-1 border-gray-300 shadow-md rounded-lg p-5 mb-10 text-left transform hover:translate-y-[-5px] transition-all hover:shadow-lg">
              <div className="flex flex-row gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/svg/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
              </div>
              <p className="py-3">{item.quote}</p>
              <h4>{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
