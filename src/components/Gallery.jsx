import React, { useState, useRef, useEffect } from "react";
import gallerBg from "../assets/gallery/galleryBg.png";
import news1 from "../assets/gallery/Galleryimage1.png";
import news2 from "../assets/gallery/gallertimage2.png";
import news3 from "../assets/gallery/galleryimage3.png";
import news4 from "../assets/gallery/galleryimage4.png";

export const Gallery = () => {
  const images = [news1, news2, news3, news4];
  const [isPaused, setIsPaused] = useState(false); // Control animation
  const [hoverIndex, setHoverIndex] = useState(null); // Track hovered image index
  const scrollContainerRef = useRef(null); // Ref to scrolling container
  const animationDuration = 15; // Total animation duration in seconds

  useEffect(() => {
    // Adjust container width dynamically, only for layout (not for animation)
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const totalWidth = images.length * (scrollContainer.firstChild.offsetWidth + 16); // Image width + gap
      scrollContainer.style.width = `${totalWidth}px`; // Total width for images
    }
  }, [images]);

  const handleMouseEnter = (index) => {
    setIsPaused(true);
    setHoverIndex(index); // Set the hovered image index
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = "paused"; // Pause animation on hover
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoverIndex(null); // Reset hovered index
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = "running"; // Resume animation when mouse leaves
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
            ref={scrollContainerRef}
            className={`relative flex items-center gap-4 ${isPaused ? "" : "animate-scroll2"}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Render Images Twice for Seamless Loop */}
            {images.concat(images).map((src, index) => (
              <div
                key={index}
                className={`flex-shrink-0 rounded-lg overflow-hidden transition duration-300 ${
                  hoverIndex === index ? "grayscale-0" : "grayscale"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
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
