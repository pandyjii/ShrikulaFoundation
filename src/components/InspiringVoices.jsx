import inspireBg from "../assets/inspiringVoiceImg/inspireBg.png";
import inspire1 from "../assets/inspiringVoiceImg/inspire1.png";
import inspire2 from "../assets/inspiringVoiceImg/inspire2.png";
import inspire3 from "../assets/inspiringVoiceImg/inspire3.png";
import inspire4 from "../assets/inspiringVoiceImg/inspire4.png";
export const InspiringVoices = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-8"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >
      {/* Heading Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-[#FBB59C] w-fit px-4 py-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-black">Meet Our Inspiring Voices</h2>
        </div>
        <p className="mt-4 text-lg text-black">
          Celebrating the Minds Shaping Kashmiri Literature and Culture
        </p>
      </div>

      {/* Auto-Scrollable Section */}
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-6 animate-scroll">
          {/* Speaker Card */}
          {[
            {
              img: inspire1, // Remove the curly braces
              title: "Speaker",
              name: "Swami Rudranatha",
              description:
                "Invocation of Maa Sharda & planting a Kalpa Vriksha",
            },
            {
              img: inspire2,
              title: "Author",
              name: "Arif Muhammad Khan",
              description: "Opening Ceremony",
            },
            {
              img: inspire3,
              title: "Speaker",
              name: "Shonaleeka Kaul",
              description: "Bharata Before the British",
            },
            {
              img: inspire4,
              title: "Poet",
              name: "Ravindra Pandita",
              description: "Sharda - The Quest of Shared Heritage",
            },
            {
              img: inspire1,
              title: "Author",
              name: "Lt Gen DP Pandita",
              description: "Kashmir: Past, Present & Future",
            },
          ].map((speaker, index) => (
            <div
              key={index}
              className="min-w-[250px] overflow-hidden"
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-black">
                  {speaker.title}
                </h3>
                <h4 className="text-lg font-bold text-black">
                  {speaker.name}
                </h4>
                <p className="mt-2 text-sm text-black">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
