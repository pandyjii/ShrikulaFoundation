import display from "../assets/display.mp4";
import displayText from "../assets/displayText.png";

export const DisplayPage = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[65vh] lg:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Ensure inline playback on iOS
      >
        <source src={display} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-center items-center text-black">
        {/* Centered Image */}
        <img
          src={displayText}
          alt="Display Text"
          className="w-[90%] h-[30%] md:w-[50%] max-w-[500px]"
        />

        {/* Marquee Bottom Text */}
        <div className="absolute bottom-6 w-[100vw] sm:w-[50vw] overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm md:text-base text-center px-4 text-black font-inter font-semibold">
            7th & 8th of December 2024 at Dal Lakefront, SKICC, Srinagar, Bharat
          </div>
        </div>
      </div>
    </div>
  );
};
