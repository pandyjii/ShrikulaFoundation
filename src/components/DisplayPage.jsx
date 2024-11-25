import display from "../assets/display.mp4";
import displayText from "../assets/displayText.png"
export const DisplayPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src={display} // Replace with your video file path
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-cente"></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex flex-col justify-center items-center text-white">
        <img src={displayText} alt="" className="w-[50%]"/>
        <p className="mt-6 text-lg md:text-xl text-center absolute bottom-4">
          7th & 8th of December 2024 at Dal Lakefront, SKICC, Srinagar, Bharat
        </p>
      </div>
    </div>
  );
};
