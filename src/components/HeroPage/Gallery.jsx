import React, { useRef, useEffect, useState } from "react";
import gallerBg from "../../assets/gallery/galleryBg.png";
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";
import img9 from "../../assets/gallery/img9.jpg";
import img10 from "../../assets/gallery/img10.jpg";
import img11 from "../../assets/gallery/img11.jpg";
import img12 from "../../assets/gallery/img12.jpg";
import img13 from "../../assets/gallery/img13.jpg";
import img14 from "../../assets/gallery/img14.jpg";
import img15 from "../../assets/gallery/img15.jpg";

export const Gallery = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const images = [img11, img15, img13, img2, img3, img4, img1, img5, img14, img12, img6, img7, img8, img9, img10];

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

        {/* Scrolling Section */}
        <div className="overflow-hidden relative py-4">
          <div
            className={`flex gap-4 w-max animate-scrollGallery ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={scrollRef}
          >
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
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
