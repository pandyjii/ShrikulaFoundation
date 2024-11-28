import performanceBg from "../assets/performanceImg/performanceBg.png";
import video1 from "../assets/instagram/AwaraHoon.mp4";
import video2 from "../assets/instagram/Video.mov";
import video3 from "../assets/instagram/reels3.mp4";


const CulturalPerformances = () => {
  // Array of card data
  const cards = [
    {
      videoSrc: video2,
      title: "Aishwarya Attri",
      description: "Bharatanatyam dancer",
    },
    {
      videoSrc: video1,
      title: "Abha Hanjura",
      description: "Famous Kashmiri Singer",
    },
    {
      videoSrc: video3,
      title: "Nandana Moulick",
      description: "Bharatanatyam dancer",
    },
  ];

  // Check if the device is small (mobile or tablet)
  const isSmallDevice = window.innerWidth <= 1024;

  return (
    <div
      className="relative w-full bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${performanceBg})` }}
    >
      {/* Overlay Content */}
      <div className="">
        {/* Heading */}
        <div className="text-center mb-5 mt-2">
          <div className="w-full flex justify-center text-center">
            <h2 className="bg-[#FBB59C] w-fit text-2xl lg:text-3xl px-4 py-3 font-bold text-black text-center">
              Cultural Performances & Exhibitions
            </h2>
          </div>
          <p className="mt-4 text-lg md:text-lg text-center font-semibold text-gray-700">
            Experience the Heart of Culture
          </p>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col sm:flex-row w-full justify-center items-center text-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 text-center mx-2"
            >
              <div className="w-64 h-96 bg-black rounded-2xl  border-[5px] border-[#DAF7FF] overflow-hidden group relative">
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="auto"
                  autoPlay={isSmallDevice} // Enable autoplay for small devices
                  onMouseEnter={(e) => !isSmallDevice && e.target.play()} // Only play on hover for larger screens
                  onMouseLeave={(e) => !isSmallDevice && e.target.pause()} // Pause on hover leave for larger screens
                >
                  <source src={card.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalPerformances;
