import React, { useRef, useEffect } from "react";
import video1 from "../assets/instagram/AwaraHoon.mp4";
import video2 from "../assets/instagram/Video.mov";

export const InstagramReels = () => {
  const reelContainerRef = useRef(null);
  const videoRefs = useRef([]);

  // Array of videos
  const reels = [video1, video2, video1];

  useEffect(() => {
    const container = reelContainerRef.current;
    let index = 0;

    const playReels = () => {
      if (container) {
        // Scroll to the next reel
        container.scrollTo({
          left: container.offsetWidth * index,
          behavior: "smooth",
        });

        // Pause all videos except the current one
        videoRefs.current.forEach((video, videoIndex) => {
          if (videoIndex === index) {
            video.play(); // Play the current video
          } else {
            video.pause(); // Pause all other videos
          }
        });

        // Increment or reset the index
        index = (index + 1) % reels.length;
      }
    };

    const interval = setInterval(playReels, 5000); // Change reel every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup on unmount
      videoRefs.current.forEach((video) => video.pause()); // Pause all videos
    };
  }, [reels]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden font-inter">
      {/* Heading Section */}
      <div className="text-center pt-10">
        <h2 className="text-4xl font-bold text-black">Instagram</h2>
        <p className="text-lg text-black mt-3">
          Stay updated with our latest stories, trends, and behind-the-scenes moments
        </p>
      </div>

      {/* Reel Container */}
      <div
        ref={reelContainerRef}
        className="flex overflow-x-scroll no-scrollbar w-full h-full snap-x snap-mandatory justify-center items-center"
      >
        {reels.map((reel, index) => (
          <div
            key={index}
            className="snap-center w-[300px] flex-shrink-0 mx-2" // Ensure fixed width for uniform reels and reduced gaps
          >
            <div className="relative bg-white rounded-2xl shadow-md h-full">
              {/* Added 'rounded-2xl' to the video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel}
                loop
                muted
                className="w-full h-full object-cover rounded-2xl" // Apply rounding to the video
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
