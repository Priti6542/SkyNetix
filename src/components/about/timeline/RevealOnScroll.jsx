import React, { useRef, useEffect, useState } from "react";

// Fade up on scroll into view
export function RevealOnScroll({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transform transition-all duration-[900ms] opacity-0 translate-y-10
        ${visible ? "opacity-100 translate-y-0" : ""}
      `}
    >
      {children}
    </div>
  );
}
