import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MainLayout = ({ children }) => {
  const pages = React.Children.toArray(children);

  return (
    <div className="h-screen w-full">
      <Swiper
        direction="vertical"
        effect="fade"
        speed={1000}
        loop={false}
        mousewheel={{ invert: false, thresholdDelta: 50 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel, EffectFade]}
        className="h-screen w-full"
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>{page}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainLayout;
