import React, { useState } from 'react';
import { CardData } from './CardData.jsx';
import { HiArrowNarrowRight } from 'react-icons/hi';

function CardSection() {
  const { heading, description } = CardData[0];
  const cardItems = CardData.slice(1);

  return (
    <div className="max-w-8xl mx-auto py-10 px-4">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">{heading}</h3>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-6">
        {cardItems.map((item, idx) => (
          <CardItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

function CardItem({ item }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        flex-1 bg-white rounded-2xl shadow-md transition-all duration-300 relative group cursor-pointer
        min-h-[340px] flex flex-col overflow-hidden
        hover:bg-gray-800 hover:shadow-2xl text-gray-800 transition-colors duration-300 border-2 border-gray-200
      `}
      style={{ minWidth: '220px', maxWidth: '450px', minHeight: 340, maxHeight: 400 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col justify-center flex-1 p-6">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white">{item.title}</h4>
        <p className="py-8 text-gray-600 text-sm group-hover:text-white">{item.description}</p>
      </div>

      <div className="relative w-full mt-auto">
        <div className="border border-gray-400 rounded-[20px] w-60 h-20 mx-auto mb-6 relative overflow-hidden">
          {/* Arrow */}
          <HiArrowNarrowRight
            className={`
              absolute top-1/2 transform -translate-y-1/2
              border-2 border-gray-500 rounded-full p-1
              transition-all duration-500 ease-in-out cursor-pointer
              ${hover ? 'left-[75%] bg-black text-white' : 'left-[20%] text-black'}
            `}
            size={28}
          />

          {/* Image appears on hover */}
          {hover && (
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full rounded-[20px] object-cover opacity-90"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
