import React, { useState, useEffect, useRef } from "react";
import gallerBg from "../assets/gallery/galleryBg.png";
import inspire1 from "../assets/inspiringVoiceImg/inspire1.png";
import inspire2 from "../assets/inspiringVoiceImg/inspire2.png";
import inspire3 from "../assets/inspiringVoiceImg/inspire3.png";
import inspire4 from "../assets/inspiringVoiceImg/inspire4.png";

export const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const images = [
    inspire1,
    inspire2,
    inspire3,
    inspire4,
    inspire1,
    inspire2,
    inspire3,
    inspire4,
  ];

  // Continuous scrolling effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollSpeed = 1; // Speed of the scroll
    let position = 0;

    const scroll = () => {
      if (!isPaused) {
        position -= scrollSpeed; // Update position
        if (Math.abs(position) >= container.scrollWidth / 2) {
          position = 0; // Reset position for seamless loop
        }
        container.style.transform = `translateX(${position}px)`;
      }
    };

    const interval = setInterval(scroll, 16); // Smooth 60 FPS animation
    return () => clearInterval(interval); // Cleanup on unmount
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${gallerBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#2E2E2E] mb-10">Gallery</h2>

        {/* Scrolling Gallery */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // Pause on hover
          onMouseLeave={() => setIsPaused(false)} // Resume on leave
        >
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4"
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-64 h-48 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
