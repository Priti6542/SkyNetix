import React, { useState } from 'react';
import styles from './Hero.module.css';
import { HeroData } from './HeroData';  // Import data

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? HeroData.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentIndex((prev) => (prev === HeroData.length - 1 ? 0 : prev + 1));
  const handleCardClick = (index) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  return (
    <div className={styles.heroWrapper}>
      {/* {HeroData.map((item, index) => {
        let position = "";
        if (index < currentIndex) position = "left";
        else if (index === currentIndex) position = "active";
        else position = "right";

        return (
          <div
            key={index}
            className={`${styles.card} ${styles[position]}`}
            onClick={() => handleCardClick(index)}
          >
            {(position === "left" || position === "right") && (
              <div className={styles.verticalLabel}>{item.label}</div>
            )}

            {position === "active" && (
              <>
                <div className={styles.cardText}>
                  <h1>
                    {item.title[0]} <br /> {item.title[1]}
                  </h1>
                  <p>{item.description[0]}</p>
                  <div className={styles.logos}>
                    {item.logos?.map((logo, i) => (
                      <img key={i} src={logo} alt={`Logo ${i + 1}`} />
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className={styles.cardImage}>
              <img src={item.image} alt={item.label || "Hero Image"} />
            </div>
          </div>
        );
      })} */}

      {HeroData.map((item, index) => {
        let position = "";
        if (index < currentIndex) position = "left";
        else if (index === currentIndex) position = "active";
        else position = "right";

        return (
          <div
            key={index}
            className={`${styles.card} ${styles[position]}`}
            onClick={() => handleCardClick(index)}
          >
            {/* Left / Right: Only vertical label */}
            {(position === "left" || position === "right") && (
              <div className={styles.verticalLabel}>{item.label}</div>
            )}

            {/* Active card: full content */}
            {position === "active" && (
              <div className={styles.cardText}>
                <h1>
                  {item.title[0]}
                  {item.title[1] && <br />}
                  {item.title[1]}
                </h1>
                <p>{item.description[0]}</p>
                {/* <div className={styles.logos}>
                  {item.logos?.map((logo, i) => (
                    <img key={i} src={logo} alt={`Logo ${i + 1}`} />
                  ))}
                </div> */}
              </div>
            )}

            {/* Card image */}
            <div className={styles.cardImage}>
              <img src={item.image} alt={item.label || "Hero Image"} />
            </div>
          </div>
        );
      })}


      <button className={styles.arrowLeft} onClick={goPrev} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className={styles.arrowRight} onClick={goNext} aria-label="Next Slide">
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
