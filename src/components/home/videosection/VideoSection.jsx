import React, { useState, useRef } from "react";
import creationsData from "./VideoSectionData";

function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const handleOpenModal = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <div className="w-full max-w-6xl mt-6 mx-auto px-4 sm:px-6 lg:px-8 sm:mt-20 mb-60">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Our Latest Creations
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works — each piece crafted with
        intention, emotion, and style.
      </p>

      {/* Video Cards Section */}
      <div
        className="flex justify-center flex-wrap sm:flex-nowrap items-center gap-6 mt-10 
                   overflow-x-auto sm:overflow-x-visible h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] 
                   group scrollbar-hide"
      >
        {creationsData.map((item, index) => (
          <div
            key={index}
            className="relative group flex-shrink-0 w-[240px] h-[300px] sm:w-[280px] sm:h-[400px] 
                       md:w-[320px] md:h-[450px] lg:w-[280px] lg:h-[400px] 
                       transition-all duration-500 hover:w-[400px] hover:h-[450px] 
                       border border-transparent hover:border-white rounded overflow-hidden"
          >
            <video
              className={`h-full w-full object-cover ${item.videoPosition}`}
              src={item.video}
              controls
              autoPlay
              muted
              loop
            />

            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl sm:text-3xl">{item.title}</h1>
              <p className="text-xs sm:text-sm mb-4 sm:mb-10">{item.description}</p>
            </div>

            <button
              className="absolute left-3 bottom-3 px-2 py-1 bg-white/80 text-black rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => handleOpenModal(item.video)}
            >
              Watch Video
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-2xl shadow-2xl bg-black"
            />
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 bg-white/20 hover:bg-white/40 text-white font-bold text-3xl sm:text-4xl rounded-full p-2 sm:p-3 transition-all duration-300 shadow-lg backdrop-blur-md"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoSection;
