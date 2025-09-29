import React from "react";
import { timelineCards } from "./timelineData";
import { RevealOnScroll } from "./RevealOnScroll";

const timelineColors = [
  "bg-[#46b8e9]",
  "bg-[#3ee9d1]",
  "bg-[#ce43eb]",
  "bg-[#4d92eb]"
];

const Timeline = () => (
  <section className="py-[100px] bg-[#f7f7f7] border-t border-b border-[#bfbfbf66]" id="timeline">
    <h1 className="text-center text-[3rem] font-light mb-5">A Flexbox Timeline</h1>
    <p className="text-center max-w-[90%] mx-auto mb-[45px]">
      All cards must be the same height and width for space calculations on large screens.
    </p>
    <div className="relative mx-auto flex flex-col lg:flex-row lg:flex-wrap lg:w-[1170px] lg:h-[1270px] lg:justify-center lg:items-stretch">
      {/* Timeline line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 border-l border-[#bdbdbd] z-1"></div>
      
      {timelineCards.map((card, idx) => {
        // Odd/even placement for left/right
        const isOdd = idx % 2 === 0;
        const colorClass = timelineColors[idx % timelineColors.length];
        const marginTop = idx === 1 ? "lg:mt-[180px]" : "lg:mt-[45px]";
        
        return (
          <RevealOnScroll key={card.number} delay={idx * 120}>
            <div
              className={`
                relative block mx-auto mb-20 max-w-[94%] z-2
                sm:max-w-[60%] md:max-w-[40%]
                lg:max-w-[450px] lg:h-[400px] lg:my-[45px]
                transition-transform duration-300 
                hover:scale-[1.04] hover:-translate-y-2 hover:shadow-xl
                ${colorClass} ${marginTop}
                ${isOdd ? "lg:mr-[45px]" : "lg:ml-[45px]"}
              `}
              style={{
                marginLeft: isOdd ? "0" : "45px",
                marginRight: isOdd ? "45px" : "0"
              }}
            >
              {/* Arrow and marker for desktop */}
              <div className="relative">
                {window.innerWidth >= 1000 && (
                  <>
                    <span
                      className={`
                        absolute top-[34px] z-10 w-0 h-0 border-y-[15px] border-y-transparent
                        ${isOdd
                          ? `border-l-[15px] border-l-solid left-full border-l-[${timelineColors[idx % timelineColors.length].replace('bg-','').replace('[','').replace(']','')}]`
                          : `border-r-[15px] border-r-solid right-full border-r-[${timelineColors[idx % timelineColors.length].replace('bg-','').replace('[','').replace(']','')}]`
                        }
                      `}
                    ></span>
                    <span
                      className={`
                        absolute top-[34px] z-10 w-[9px] h-[9px] rounded-full bg-[#bdbdbd] shadow-[0_0_2px_8px_#f7f7f7]
                        ${isOdd ? "left-[491px]" : "right-[491px]"}
                      `}
                    ></span>
                  </>
                )}
                <div className="flex items-center relative text-white font-normal h-[85px]">
                  <span className="inline float-left m-[15px] p-[10px] text-[35px] font-bold bg-black bg-opacity-20 leading-[35px]">
                    {card.number}
                  </span>
                  <div>
                    <h2 className="uppercase text-[1.3rem] font-inherit tracking-[2px] m-0 pb-[6px] leading-[1rem] sm:text-[1.65rem] sm:leading-[1.2rem]">
                      <span className="block text-[0.6rem] sm:text-[0.8rem] m-0">{card.subtitle}</span>
                      {card.title}
                    </h2>
                  </div>
                </div>
                <div className="bg-white border border-[#bfbfbf66] border-t-0 p-[15px] lg:h-[315px]">
                  <p className="text-[14px] leading-[18px] mb-[15px]">{card.description}</p>
                  <img src={card.image} alt="Graphic" className="block w-full" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        );
      })}
    </div>
  </section>
);

export default Timeline;
