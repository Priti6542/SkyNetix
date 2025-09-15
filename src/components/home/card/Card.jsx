import React from 'react';
import { CardData } from './CardData.jsx';

function CardSection() {
  const { heading, description } = CardData[0];
  const cardItems = CardData.slice(1);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h3 className="text-3xl font-bold text-center mb-2 text-gray-900">{heading}</h3>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">{description}</p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 w-full h-auto sm:h-[400px]">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="
              relative group 
              w-full mb-6 last:mb-0 
              sm:flex-grow 
              sm:w-56 
              sm:h-full 
              rounded-lg overflow-hidden shadow-md 
              transition-all duration-500 
              cursor-pointer 
              hover:shadow-xl 
              sm:hover:w-full
            "
          >
            <img
              src={item.image}
              alt={`Card ${index + 1}`}
              className="
                w-full h-auto sm:h-full object-cover object-center 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />
            <div className="
              absolute inset-0 flex flex-col justify-end p-6 
              text-white bg-black/50 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 
              rounded-lg
            ">
              <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
              <p className="text-sm line-clamp-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
