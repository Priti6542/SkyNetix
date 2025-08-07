// src/components/AboutUs.jsx

import React from "react";
import styles from "./AboutUs.module.css";
import { images, aboutContent } from "./aboutData";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <div className={styles.row}>
          {images.map((img, index) => (
            <div className={styles.imgWrapper} key={index}>
              <img src={img} alt={`about-img-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.content}>
          <h4>{aboutContent.subHeading}</h4>
          <h2>{aboutContent.heading}</h2>
          <p>{aboutContent.paragraph}</p>
          <Link to={aboutContent.link}>{aboutContent.buttonText}</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
