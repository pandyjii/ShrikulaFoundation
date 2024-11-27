import React, { useRef, useEffect, useState } from "react";
import video1 from "../assets/instagram/AwaraHoon.mp4";
import video2 from "../assets/instagram/Video.mov";

export const InstagramReels = () => {
  const reelContainerRef = useRef(null);
  const videoRefs = useRef([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Array of videos
  const reels = [video1, video2, video1];

  useEffect(() => {
    // Detect screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Small screen for widths < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) return; // Only apply auto-scroll for small screens

    const container = reelContainerRef.current;
    let index = 0;

    const playReels = () => {
      if (container) {
        container.scrollTo({
          left: index * container.offsetWidth,
          behavior: "smooth",
        });

        // Play the current video and pause others
        videoRefs.current.forEach((video, videoIndex) => {
          if (videoIndex === index) {
            video.play();
          } else {
            video.pause();
          }
        });

        // Increment or reset index
        index = (index + 1) % reels.length;
      }
    };

    const interval = setInterval(playReels, 5000); // Change reel every 5 seconds

    return () => {
      clearInterval(interval);
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, [reels, isSmallScreen]);

  return (
    <div className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[80vh] py-10 bg-white overflow-hidden font-inter">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Instagram</h2>
        <p className="text-lg text-black mt-3">
          Stay updated with our latest stories, trends, and behind-the-scenes moments
        </p>
      </div>

      {/* Reel Container */}
      <div
        ref={reelContainerRef}
        className={`flex justify-center w-full mt-10 ${
          isSmallScreen ? "overflow-hidden" : "overflow-x-auto no-scrollbar"
        } snap-x snap-mandatory`}
        style={{
          scrollSnapType: isSmallScreen ? "x mandatory" : "none",
        }}
      >
        {reels.map((reel, index) => (
          <div
            key={index}
            className={`${
              isSmallScreen
                ? "snap-center flex-shrink-0 w-full flex justify-center"
                : "flex-shrink-0 w-[300px] mx-2 text-center"
            }`}
          >
            <div className="w-72 h-96 bg-black rounded-2xl border-[5px] border-[#DAF7FF] overflow-hidden group relative">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel}
                loop
                muted
                className="w-full h-full object-cover"
                // Play on hover for large screens
                onMouseEnter={() => !isSmallScreen && videoRefs.current[index]?.play()}
                onMouseLeave={() => !isSmallScreen && videoRefs.current[index]?.pause()}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
