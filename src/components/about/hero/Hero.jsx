import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css"; 
import aboutcard from "../../../assets/aboutcard.jpg"
import aboutcard1 from "../../../assets/aboutcard1.jpg"
import aboutcard2 from "../../../assets/aboutcard2.jpg"

const sections = [
  {
    title: "Carnomia",
    subtitle: "Car Pre-Delivery Inspection",
    description: "The platform provides an easy-to-use interface for inspectors to record inspection results, mark defects, and generate reports. This eliminates manual paperwork, reduces errors, and improves efficiency in car dealerships and service centers.",
    img: aboutcard,
  },
  {
    title: "सोयरीक",
    subtitle: "Embrace the significance of shared joy.",
    description: "Developed a responsive Matrimony Website that connects individuals seeking life partners. The platform includes profile creation, partner search, and detailed profile views with options to download biodata in PDF. It ensures a user-friendly interface, secure data handling, and smooth navigation for an enhanced matchmaking experience.",
    img: aboutcard1,
  },
  {
    title: "Devcon Software Solutions Pvt Ltd",
    subtitle: "Explore the stories within each present.",
    description: "Devcons Software Solution is a technology-driven company specializing in innovative web, mobile, and enterprise solutions. We focus on delivering scalable, secure, and user-friendly software tailored to client needs. With expertise in the latest technologies, our mission is to empower businesses through digital transformation and reliable IT services.",
    img: aboutcard2,
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
    <div>
      <h2 className={styles.Heading}>Portfolio</h2>
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
    
</div>
  );

}