import performanceBg from "../assets/performanceImg/performanceBg.png";
import performance1 from "../assets/performanceImg/performanceImg1.png";
import performance2 from "../assets/performanceImg/performanceImg2.png";

const CulturalPerformances = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${performanceBg})` }}
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-10 mt-5">
          <div className="bg-[#FBB59C] w-fit px-4 py-1">
            <h2 className="text-2xl lg:text-3xl font-bold text-black">
            Cultural Performances & Exhibitions
            </h2>
          </div>
          <p className="mt-4 text-lg md:text-lg font-semibold text-gray-700">
            Experience the Heart of Culture
          </p>
        </div>

        {/* Content Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1: Static Image */}
          <div className="w-64 h-[22rem] bg-white rounded-2xl overflow-hidden">
            <img
              src={performance1} // Replace with the first image
              alt="Aishwarya Attre"
              className="w-full h-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Aishwarya Attri</h3>
              <p className="text-sm text-gray-600">Bharatanatyam Dancer</p>
            </div>
          </div>

          {/* Card 2: Video Reel */}
          <div className="w-64 h-[22rem] bg-black rounded-2xl overflow-hidden group">
            <video
              className="w-full h-full object-cover"
              muted
              loop
              preload="auto"
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            >
              <source src="/path-to-video.mp4" type="video/mp4" />{" "}
              {/* Replace with your video */}
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Abha Hanjura</h3>
              <p className="text-sm">Famous Kashmiri Singer</p>
            </div>
          </div>

          {/* Card 3: Static Image */}
          <div className="w-64 h-[22rem] bg-white rounded-2xl overflow-hidden">
            <img
              src={performance2} // Replace with the last image
              alt="Kashmir Literature Festival"
              className="w-full h-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">
                Kashmir Literature Festival
              </h3>
              <p className="text-sm text-gray-600">7-8 December, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalPerformances;
