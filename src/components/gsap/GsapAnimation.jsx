
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function useGsapScrollAnimation(selector, animationFrom, animationTo, scrollTriggerOptions) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current.querySelector(selector);

    gsap.fromTo(
      element,
      animationFrom,
      {
        ...animationTo,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
          ...scrollTriggerOptions,
        },
      }
    );

    return () => {
      if (element) {
        // Clean up ScrollTrigger
      }
    };
  }, [selector, animationFrom, animationTo, scrollTriggerOptions]);

  return ref;
}
