import React, { useState } from "react";
import creationsData from "./VideoSectionData";

function VideoSection() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    // Opens modal with selected video
    const handleOpenModal = (video) => {
        setActiveVideo(video);
        setModalOpen(true);
    };

    // Closes modal
    const handleCloseModal = () => {
        setModalOpen(false);
        setActiveVideo(null);
    };

    return (
        <div className="w-full max-w-6xl mt-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center mx-auto">
                Our Latest Creations
            </h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                A visual collection of our most recent works - each piece crafted with
                intention, emotion, and style.
            </p>

            {/* Videos wrapper */}
            <div
                className="
          flex items-center gap-6 h-[400px] mt-10 
          overflow-x-auto sm:overflow-x-visible sm:flex-nowrap sm:h-[400px] 
          group
        "
            >
                {creationsData.map((item, index) => (
                    <div
                        key={index}
                        className="
                        relative group 
                        flex-shrink-170 w-100 h-[400px] 
                        sm:flex-grow sm:w-70 
                        transition-all duration-500 
                        hover:w-150 border border-transparent hover:border-white 
                        rounded overflow-hidden
                        "
                    >
                        <video
                            className={`h-full w-full object-cover ${item.videoPosition}`}
                            src={item.video}
                            controls
                            autoPlay
                            muted
                            loop
                        />

                        {/* Info overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{item.title}</h1>
                            <p className="text-sm mb-10">{item.description}</p>
                        </div>

                        {/* "Watch Video" button */}
                        <button
                            className="absolute left-4 bottom-4 px-3 py-2 bg-white/80 text-black rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative max-w-3xl w-full p-4"
                        onClick={(e) => e.stopPropagation()} // Prevent close on inside click
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-3xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full max-h-[80vh] rounded shadow-lg bg-black"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoSection;
