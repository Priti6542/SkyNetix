// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import styles from './Hero.module.css';

// const Hero = () => {
//   const menuRef = useRef(null);
//   const sectionRef = useRef(null);

//   const handleOpenMenu = () => {
//     menuRef.current.classList.remove('max-md:w-0');
//     menuRef.current.classList.add('max-md:w-full');
//     sectionRef.current.classList.add('overflow-hidden');
//   };

//   const handleCloseMenu = () => {
//     menuRef.current.classList.remove('max-md:w-full');
//     menuRef.current.classList.add('max-md:w-0');
//     sectionRef.current.classList.remove('overflow-hidden');
//   };

//   return (
//     <section ref={sectionRef} id="section" className={styles.heroSection}>
//       <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full">
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
//           type="button"
//         >
//           <span>Explore how we help grow brands.</span>
//           <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
//             <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
//                 stroke="#fff"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//         </motion.button>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight"
//         >
//           Preferred choice of leaders in{' '}
//           <span className="text-purple-600">every industry</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed"
//         >
//           Learn why professionals trust our solution to complete their customer journey.
//         </motion.p>

//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
//           type="button"
//         >
//           <span>Read Success Stories</span>
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
//               stroke="#fff"
//               strokeWidth="1.8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.button>

//         <motion.img
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="rounded-[50px] mt-16 h-72 w-full object-cover rounded-b-none max-w-5xl"
//           src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop"
//           alt="Success story"
//         />
//       </main>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css"; // Your CSS module with classes

const sections = [
  {
    title: "Stories Unveiled",
    subtitle: "Capture the essence of family celebration.",
    description: "Share the moments that weave your family tale.",
    img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-3.avif",
  },
  {
    title: "Celebrating Life Together",
    subtitle: "Embrace the significance of shared joy.",
    description: "In every celebration, find the heartwarming stories.",
    img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-2.avif",
  },
  {
    title: "The Art of Giving",
    subtitle: "Explore the stories within each present.",
    description: "Every gift is a chapter in your family's narrative.",
    img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/stories-with-scroll-driven/images/img-desktop-1.avif",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeStage, setFadeStage] = useState("fadeIn"); // for fade animation effect

  // Handle fade out/in when switching content
  useEffect(() => {
    setFadeStage("fadeOut");
    const timeout = setTimeout(() => {
      setFadeStage("fadeIn");
    }, 300); // Duration same as CSS transition duration
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const onKeyPressDot = (event, idx) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(idx);
    }
  };

  if (!sections.length) return null;

  const { title, subtitle, description, img } = sections[activeIndex];

  return (
    <div className={styles.Container}>
      <div className={styles.PhotoCard}>
        <img
          src={img}
          alt={title}
          className={fadeStage === "fadeIn" ? styles.fadeIn : styles.fadeOut}
        />
        {/* <div className={styles.Pagination}>
          {sections.map((_, idx) => (
            <div
              key={idx}
              role="button"
              aria-label={`View section ${sections[idx].title}`}
              tabIndex={0}
              className={`${styles.Dot} ${idx === activeIndex ? styles.DotActive : ""}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => onKeyPressDot(e, idx)}
            />
          ))}
        </div> */}
        <div className={styles.Pagination}>
  {sections.map(({ title }, idx) => (
    <div
      key={idx}
      role="button"
      aria-label={`View section ${title}`}
      tabIndex={0}
      className={`${styles.TextButton} ${idx === activeIndex ? styles.DotActive : ""}`}
      onClick={() => setActiveIndex(idx)}
      onKeyDown={(e) => onKeyPressDot(e, idx)}
      style={{ cursor: "pointer", padding: '6px 10px', display: 'inline-block', userSelect: 'none' }}
    >
      {title}
    </div>
  ))}
</div>

      </div>
      <div className={`${styles.Content} ${fadeStage === "fadeIn" ? styles.fadeIn : styles.fadeOut}`}>
        <h1 className={styles.Heading}>{title}</h1>
        <div className={styles.Subtitle}>{subtitle}</div>
        <div className={styles.Description}>{description}</div>
      </div>
    </div>
  );

}