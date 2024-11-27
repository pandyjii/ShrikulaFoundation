import React, { useState, useRef } from "react";
import gallerBg from "../assets/gallery/galleryBg.png";
import news1 from "../assets/gallery/Galleryimage1.png";
import news2 from "../assets/gallery/gallertimage2.png";
import news3 from "../assets/gallery/galleryimage3.png";
import news4 from "../assets/gallery/galleryimage4.png";

export const Gallery = () => {
  const images = [news1, news2, news1, news4, news3, news4];
  const [isPaused, setIsPaused] = useState(false); // State to control animation
  const scrollContainerRef = useRef(null); // Ref to access the scrolling container

  // Function to handle mouse enter on images
  const handleMouseEnter = () => {
    setIsPaused(true);
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Get the current scroll position and keep it fixed
      scrollContainer.style.animationPlayState = "paused";
      scrollContainer.style.transform = `translateX(${scrollContainer.getBoundingClientRect().x}px)`;
    }
  };

  // Function to handle mouse leave on images
  const handleMouseLeave = () => {
    setIsPaused(false);
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Resume the animation
      scrollContainer.style.animationPlayState = "running";
      scrollContainer.style.transform = ""; // Reset transform
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-[57vh] sm:h-[42vh] lg:h-[70vh]"
      style={{
        backgroundImage: `url(${gallerBg})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/60">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-lg">A Glimpse Into Our World</p>
        </div>

        {/* Scrolling Gallery */}
        <div className="overflow-hidden py-4">
          <div
            ref={scrollContainerRef} // Attach ref to the scrolling container
            className={`flex items-center gap-4 ${
              isPaused ? "" : "animate-scrollSm sm:animate-scroll2"
            }`}
            style={{
              width: "calc(100vw * 2)", // Double the width for smooth looping
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300"
                onMouseEnter={handleMouseEnter} // Pause animation on hover
                onMouseLeave={handleMouseLeave} // Resume animation on leave
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[200px] max-w-[400px] md:max-w-[300px] sm:max-w-[200px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate images for seamless looping */}
            {images.map((src, index) => (
              <div
                key={`clone-${index}`}
                className="flex-shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300"
                onMouseEnter={handleMouseEnter} // Pause animation on hover
                onMouseLeave={handleMouseLeave} // Resume animation on leave
              >
                <img
                  src={src}
                  alt={`Gallery Clone ${index + 1}`}
                  className="w-full h-[200px] max-w-[400px] md:max-w-[300px] sm:max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
