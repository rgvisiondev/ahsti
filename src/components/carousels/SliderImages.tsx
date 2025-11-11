import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

const SliderImages = () => {
  const slides = [
    { img: "/credentials/1.png" },
    { img: "/credentials/2.png" },
    { img: "/credentials/3.png" },
    { img: "/credentials/4.png" },
    { img: "/credentials/5.png" },
    { img: "/credentials/6.png" },
    { img: "/credentials/7.png" },
    { img: "/credentials/8.png" },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="w-full relative overflow-hidden py-4 sm:py-6 md:py-8">
      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 flex items-center justify-center
              w-1/4 sm:w-1/5 md:w-1/8
              px-2 sm:px-4 md:px-6
            "
          >
            <Image
              src={slide.img}
              alt="slider"
              width={100}
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderImages;
