"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  era: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    era: "1970s",
    title: "Foundations of Hope",
    description:
      "AHSTI began its mission in McAllen, Texas, helping families living in substandard housing conditions — dirt floors, outhouses, and unsafe structures — find stability through affordable, quality homes. These humble beginnings laid the foundation for a lifelong commitment to community transformation.",
  },
  {
    era: "1980s",
    title: "Building New Futures",
    description:
      "The organization expanded from repairing homes to building new homes for low-income families. This decade marked a major step forward in AHSTI’s mission to provide safe, sustainable housing and empower families through ownership.",
  },
  {
    era: "1990s",
    title: "Expanding Our Community",
    description:
      "AHSTI extended its services beyond McAllen and into other parts of Hidalgo County, bringing affordable housing opportunities to more families across South Texas. The organization’s impact began to ripple through neighboring communities.",
  },
  {
    era: "2000s",
    title: "Growth and Innovation",
    description:
      "A new era of expansion began as AHSTI developed full subdivisions and became a HUD-approved counseling agency, adding financial education, lending, and homebuyer assistance programs. This period marked the organization’s transformation into a comprehensive housing resource for the region.",
  },
  {
    era: "TODAY",
    title: "50+ Years of Impact",
    description:
      "After 50+ years of service, AHSTI celebrates helping over 4,700 families achieve their dreams of homeownership. With each new home, we continue to strengthen the South Texas community and shape a brighter, more equitable future.",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  return (
    <div ref={ref} className="relative py-20">
      {/* Background Line (glow) */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-blue-200/50 blur-[1px]"></div>

      {/* Animated Scroll Line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="origin-top absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-primary shadow-[0_0_15px_rgba(59,130,246,0.7)] rounded-full"
      ></motion.div>

      <div className="space-y-16 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Animated Card */}
              <motion.div
                className={`w-5/12 p-6 rounded-xl shadow-md bg-white border border-gray-200 transform hover:translate-y-[-5px] transition-all hover:shadow-lg ${
                  isLeft ? "text-right" : "text-left"
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-primary">{item.era}</h4>
                <h3>{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>

              {/* Static Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
