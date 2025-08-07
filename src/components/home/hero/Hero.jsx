// Hero.jsx
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { HeroData } from './HeroData';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // for restarting animation

  const handleCardClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setAnimationKey(prev => prev + 1); // reset progress bar animation
    }
  };

  // Auto-scroll with progress reset
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % HeroData.length);
      setAnimationKey(prev => prev + 1); // reset progress bar animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      {HeroData.map((item, index) => {
        let position = '';
        if (index < currentIndex) position = 'left';
        else if (index === currentIndex) position = 'active';
        else position = 'right';

        return (
          <div
            key={index}
            className={`${styles.card} ${styles[position]}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.cardText}>
              <h1>
                {item.title[0]} <br />
                {item.title[1]}
              </h1>

              <p>
                {item.description[0]} <br />
                {item.description[1]}<br />
              </p>
              <div className={styles.content}>
                <div className={styles.text}>{item.text && item.text}</div>
                <div className={styles.logos}>
                  {/* <strong>Logos:</strong> */}
                  <div className={styles.logoContainer}>
                    {Array.isArray(item.logos) && item.logos.map((logo, index) => (
                      <img key={index} src={logo} alt={`Logo ${index + 1}`} className={styles.logoImage} />
                    ))}

                  </div>
                </div>


                {item.buttonText && (
                  <div className={styles.cardContent}>
                    <button>{item.buttonText}</button>
                  </div>
                )}

                {/* {item.services && (
                  <div className={styles.services}>
                    <strong>Services:</strong>
                    <ul>
                      {item.services.map((service, index) => (
                        <li key={index}>
                          <Link to={`/services/${service.slug}`} className="text-blue-600 hover:underline">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}

              </div>

              {/* Progress bar only for active card */}
              {/* {index === currentIndex && (
                <div className={styles.progressBar} key={animationKey}>
                  <div className={styles.progressFill} />
                </div>
              )} */}
            </div>

            <div className={styles.cardImage}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
