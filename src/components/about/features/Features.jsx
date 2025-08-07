import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import featuresData from "./FeaturesData";

const Features = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const isLastSlide = swiper.activeIndex === featuresData.length - 1;
    if (isLastSlide) {
      setTimeout(() => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 1200); // wait for animation
    }
  };

  return (
    <div className="h-screen w-full">
      <Swiper
        direction="vertical"
        effect="fade"
        speed={1000}
        loop={false}
        onSlideChange={handleSlideChange}
        mousewheel={{ invert: false, thresholdDelta: 50 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, EffectFade]}
        className="h-screen w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {featuresData.map((feature) => (
          <SwiperSlide key={feature.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${feature.bgImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="absolute top-1/4 left-5 md:left-10 max-w-xl text-white z-20 p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {feature.title}
                </h1>
                <p className="text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* This is the next section that we will scroll to */}
      <div id="next-section" className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">Next Section Content</h2>
      </div>
    </div>
  );
};

export default Features;
