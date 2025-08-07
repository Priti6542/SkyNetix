// CardSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Card.module.css';
import { CardData } from './CardData.jsx'; // Assuming CardData is an exported array

function CardSection() {
  const { heading, description } = CardData[0];
  const cardItems = CardData.slice(1); // The rest of the cards

  return (
    <div className={Styles.Container}>
      <h3>{heading}</h3>
      <p>{description}</p>

      <div className={Styles.CardsContainer}>
        {cardItems.map((item, index) => (
          <div key={index} className={Styles.Card}>
            <Link to={`/CardData`}>
              <div className={Styles.ImageContainer}>
                <img
                  src={item.image}
                  alt={`Card ${index + 1}`}
                  className={Styles.Image}
                />
              </div>
              <div className={Styles.Description}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
