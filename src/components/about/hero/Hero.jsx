import React from "react";
import styles from "./Hero.module.css"; 
import aboutcard from "../../../assets/aboutcard.png";
import aboutcard1 from "../../../assets/aboutcard1.jpg";
import aboutcard2 from "../../../assets/aboutcard2.jpg";
import aboutcard3 from "../../../assets/aboutcard3.jpg";
import aboutcard4 from "../../../assets/aboutcard4.jpg";
import aboutcard5 from "../../../assets/aboutcard5.jpg";
import aboutcard6 from "../../../assets/aboutcard6.jpg";

const sections = [
  {
    title: "Carnomia",
    subtitle: "Car Pre-Delivery Inspection",
    description:
      "Uber is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change.",
    img: aboutcard,
  },
  {
    title: "सोयरीक",
    subtitle: "Embrace the significance of shared joy.",
    description:
      "Developed a responsive Matrimony Website that connects individuals seeking life partners. The platform includes profile creation, partner search, and detailed profile views with options to download biodata in PDF. It ensures a user-friendly interface, secure data handling, and smooth navigation for an enhanced matchmaking experience.",
    img: aboutcard1,
  },
  {
    title: "Devcon Software Solutions Pvt Ltd",
    subtitle: "Explore the stories within each present.",
    description:
      "Devcons Software Solutions Pvt. Ltd. is a software company that specializes in providing custom software development and IT consulting services. Based in India, the company has a team of skilled software developers, engineers, and designers who work together to create high-quality software products and services for clients. ",
    img: aboutcard2,
  },
   {
    title: "DXN ",
    subtitle: "Explore the stories within each present.",
    description:
      "The core business activities of DXN include cultivation, manufacturing and marketing of the health food supplements. Based in Malaysia with worldwide operations, the company is well-known for its Ganoderma business. Its product lines include dietary supplements, food and beverages, personal care products, skin care and cosmetics, household products and water treatment system.",
    img: aboutcard3,
  },
  {
    title: "shree Graphics Design ",
    subtitle: "Explore the stories within each present.",
    description:
      "Founded in 2014, Shree Graphics Design started as a small studio with a big vision: to help businesses create powerful visual identities that resonate with their audience.Over the years, we've grown into a full-service design agency, serving clients across various industries. From startups to established enterprises, we've helped hundreds of businesses tell their story through compelling design.",
    img: aboutcard4,
  },
   {
    title: "Uber",
    subtitle: "Explore the stories within each present.",
    description:
      "Uber is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change.",
    img: aboutcard5,
  },
  {
    title: "Smart Software Services Pvt. Ltd. ",
    subtitle: "Explore the stories within each present.",
    description:
      "The core business activities of DXN include cultivation, manufacturing and marketing of the health food supplements. Based in Malaysia with worldwide operations, the company is well-known for its Ganoderma business. Its product lines include dietary supplements, food and beverages, personal care products, skin care and cosmetics, household products and water treatment system.",
    img: aboutcard6,
  },
];

export default function HeroSection() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Heading}>Portfolio</h2>

      <div className={styles.ScrollWrapper}>
        <div className={styles.ScrollContainer}>
          {/* First copy */}
          {sections.map((item, index) => (
            <div key={index} className={styles.Card}>
              <img src={item.img} alt={item.title} className={styles.Image} />
              <div className={styles.Content}>
                <h3>{item.title}</h3>
                <p className={styles.Subtitle}>{item.subtitle}</p>
                <p className={styles.Description}>{item.description}</p>
              </div>
            </div>
          ))}

          {/* Duplicate copy for infinite loop effect */}
          {sections.map((item, index) => (
            <div key={`dup-${index}`} className={styles.Card}>
              <img src={item.img} alt={item.title} className={styles.Image} />
              <div className={styles.Content}>
                <h3>{item.title}</h3>
                <p className={styles.Subtitle}>{item.subtitle}</p>
                <p className={styles.Description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
