import performanceBg from "../assets/performanceImg/performanceBg.png";
import video1 from "../assets/instagram/AwaraHoon.mp4";
import video2 from "../assets/instagram/Video.mov";

const CulturalPerformances = () => {
  // Array of card data
  const cards = [
    {
      videoSrc: video1,
      title: "Abha Hanjura",
      description: "Famous Kashmiri Singer",
    },
    {
      videoSrc: video2,
      title: "Rohan Koul",
      description: "Contemporary Kashmiri Artist",
    },
    {
      videoSrc: video1,
      title: "Kashmir Band",
      description: "Soulful Cultural Band",
    },
  ];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${performanceBg})` }}
    >
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center mt-10">
        {/* Heading */}
        <div className="text-center mb-5 mt-2">
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
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-96 bg-black rounded-2xl overflow-hidden group relative"
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                preload="auto"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              >
                <source src={card.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalPerformances;
