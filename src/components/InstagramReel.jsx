import React, { useRef, useEffect, useState } from "react";
import image1 from "../assets/instagram/post1.png";
import image2 from "../assets/instagram/post2.png";
import image3 from "../assets/instagram/post3.png";
import image4 from "../assets/instagram/post4.png";

export const InstagramReels = () => {
  const reelContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Array of images
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (reelContainerRef.current) {
      observer.observe(reelContainerRef.current);
    }

    return () => {
      if (reelContainerRef.current) {
        observer.unobserve(reelContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={reelContainerRef}
      className="relative w-full h-auto py-10 bg-white overflow-hidden font-inter"
    >
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Instagram</h2>
        <p className="text-lg text-black mt-3">
          Stay updated with our latest stories, trends, and behind-the-scenes moments
        </p>
      </div>

      {/* Image Reel Section */}
      <div
        className={`flex flex-col sm:flex-row items-center gap-6 mt-10 justify-center px-4 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-64 h-96 rounded-2xl border-y-[5px] border-[#DAF7FF] overflow-hidden relative"
          >
            <img
              src={image}
              alt={`Instagram Reel ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
