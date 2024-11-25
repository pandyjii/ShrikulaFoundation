import inspireBg from "../assets/inspiringVoiceImg/inspirationBg.png";
import inspire1 from "../assets/inspiringVoiceImg/inspire1.png";
import inspire2 from "../assets/inspiringVoiceImg/inspire2.png";
import inspire3 from "../assets/inspiringVoiceImg/inspire3.png";
import inspire4 from "../assets/inspiringVoiceImg/inspire4.png";

export const InspiringVoices = () => {
  const speakers = [
    {
      name: "Swami Rudranatha",
      role: "Speaker",
      topic: "Invocation of Maa Sharda & planting a Kalpa Vriksha",
      image: `${inspire1}`,
    },
    {
      name: "Arif Muhammad Khan",
      role: "Author",
      topic: "Opening Ceremony",
      image: `${inspire2}`,
    },
    {
      name: "Shonaleeka Kaul",
      role: "Speaker",
      topic: "Bharata Before the British",
      image: `${inspire3}`,
    },
    {
      name: "Ravindra Pandita",
      role: "Poet",
      topic: "Sharda – The Quest of Shared Heritage",
      image: `${inspire4}`,
    },
    {
      name: "Lt Gen DP Pandit",
      role: "Author",
      topic: "Kashmir: Past, Present, and Future",
      image: `${inspire3}`,
    },
    {
      name: "Swami Rudranatha",
      role: "Speaker",
      topic: "Invocation of Maa Sharda & planting a Kalpa Vriksha",
      image: `${inspire1}`,
    },
    {
      name: "Arif Muhammad Khan",
      role: "Author",
      topic: "Opening Ceremony",
      image: `${inspire2}`,
    },
    {
      name: "Shonaleeka Kaul",
      role: "Speaker",
      topic: "Bharata Before the British",
      image: `${inspire4}`,
    },
    {
      name: "Ravindra Pandita",
      role: "Poet",
      topic: "Sharda – The Quest of Shared Heritage",
      image: `${inspire3}`,
    },
    {
      name: "Lt Gen DP Pandit",
      role: "Author",
      topic: "Kashmir: Past, Present, and Future",
      image: `${inspire1}`,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >

      {/* Heading Section */}
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="bg-[#FBB59C] w-fit px-4 py-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-black">Meet Our Inspiring Voices</h2>
        </div>
        <p className="mt-4 text-lg text-black">
          Celebrating the Minds Shaping Kashmiri Literature and Culture
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="min-w-[250px] mx-4 overflow-hidden"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-black">
                  {speaker.role}
                </h3>
                <h4 className="text-lg font-bold text-black">
                  {speaker.name}
                </h4>
                <p className="mt-2 text-sm text-black">
                  {speaker.topic}
                </p>
              </div>
            </div>
          ))}

          {/* Duplicated content for seamless scrolling
          {speakers.map((speaker, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 mx-4 rounded-2xl p-4 text-center w-72 sm:w-64 md:w-56 lg:w-72"
            >
              <div className="relative w-36 h-36 mx-auto">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-xl w-full h-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-gray-500">
                  {speaker.role}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{speaker.topic}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
