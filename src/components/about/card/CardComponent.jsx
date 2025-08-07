import React from "react";
import styles from "./CardComponent.module.css"
import CardData from "./CardData";

const CardComponent = () => {
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
    card.style.boxShadow = `${(x - centerX) * 0.3}px ${(y - centerY) * 0.3}px 30px rgba(0, 0, 0, 0.4)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`card-${index}`);
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = `none`;
  };

  return (
    <div className={styles.container}>
      {CardData.map((card, index) => (
        <div
          key={card.id}
          id={`card-${index}`}
          className={styles.card}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={styles.icon}>{card.svg}</div>
          <h3 className={styles.title}>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
