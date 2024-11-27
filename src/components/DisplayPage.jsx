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

        {/* Bottom Text */}
        <p className="mt-6 text-sm md:text-lg lg:text-xl text-center px-4 absolute bottom-6 md:bottom-10 text-white">
          7th & 8th of December 2024 at Dal Lakefront, SKICC, Srinagar, Bharat
        </p>
      </div>
    </div>
  );
};
