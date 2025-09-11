import React from "react";
import FeatureData from "./FeatureData";

export default function HomeFeature() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        /* Smooth fade-up animation */
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
          animation-name: fadeUpAnim;
          animation-duration: 0.8s;
          animation-timing-function: ease;
        }
        @keyframes fadeUpAnim {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mx-auto mt-8 text-gray-900">
        Our Features
      </h1>
      <p className="text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Here are some typical services of Devcons Software Solutions Pvt. Ltd.
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-stretch gap-6 mt-10 mx-auto w-full px-4 sm:px-6 lg:px-0 max-w-7xl mb-10">
        {FeatureData.map((item, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-1/2 md:w-1/3 h-72 sm:h-96 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer fade-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.imagePosition}`}
              src={item.imageUrl}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base line-clamp-4 drop-shadow-md">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
