import React from "react";
import gallerBg from "../assets/gallery/galleryBg.png";
import news1 from "../assets/newsMedia/news1.png";
import news2 from "../assets/newsMedia/news2.png";
import news3 from "../assets/newsMedia/news3.png";
import news4 from "../assets/newsMedia/news4.png";

export const Gallery = () => {
  const images = [news1, news2,news1,news4, news3, news4];

  return (
    <div
      className="relative bg-cover bg-center h-[60vh]"
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
            className="flex items-center gap-4 animate-scroll"
            style={{ width: "calc(100vw * 2)" }} // Double the width for smooth looping.
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-64 h-40 object-cover shadow-md"
                />
              </div>
            ))}
            {/* Duplicate images for seamless looping */}
            {images.map((src, index) => (
              <div
                key={`clone-${index}`}
                className="rounded-lg overflow-hidden grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery Clone ${index + 1}`}
                  className="w-64 h-40 object-cover shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
