import performanceBg from "../assets/performanceImg/performanceBg.png";
import image1 from "../assets/performanceImg/Aiswarya.png";
import image2 from "../assets/performanceImg/Aaha.png";
import image3 from "../assets/performanceImg/nandana.png";

const CulturalPerformances = () => {
  // Array of card data
  const cards = [
    {
      imageSrc: image1,
      title: "Aishwarya Attri",
      description: "Bharatanatyam dancer",
    },
    {
      imageSrc: image2,
      title: "Abha Hanjura",
      description: "Famous Kashmiri Singer",
    },
    {
      imageSrc: image3,
      title: "Nandana Moulick",
      description: "Bharatanatyam dancer",
    },
  ];

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
          <p className="mt-4 text-lg md:text-lg text-center font-semibold text-black">
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
              <div className="w-64 h-96 bg-black rounded-2xl border-[5px] border-[#DAF7FF] overflow-hidden group relative">
                <img
                  className="w-full h-full object-cover"
                  src={card.imageSrc}
                  alt={card.title}
                />
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
