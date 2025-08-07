import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import slide1 from "../../../assets/h7.jpg";
import slide2 from "../../../assets/h10.jpg";
import slide3 from "../../../assets/s1.jpg";

const slides = [slide1, slide2, slide3];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      {...handlers}
      className="relative w-full min-h-[80vh] md:min-h-[85vh] overflow-hidden"
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* Black Tint */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh] px-4 sm:px-6 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          We provide Health Care Services
        </motion.h1>
        <p className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl">
          Committed to delivering exceptional healthcare experiences with advanced technologies and personalized care.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;