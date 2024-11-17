import leafsBg from "../assets/leafBg.svg";
import book from "../assets/book.svg";

export const KlfHome = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${leafsBg})` }}
    >
      {/* Content */}
      <div className="flex justify-center relative top-10">
        <div className="flex items-center space-x-10 justify-center h-full w-[70%] font-inter ">
          {/* Left Content */}
          <div className="w-[50%]">
            <h1 className="text-3xl lg:text-4xl font-bold text-black">
              #KLF2024-Srinagar
            </h1>
            <p className="mt-4 text-sm leading-4 text-black">
              <strong>
                Light - brings clarity to vision & burns ignorance
              </strong>
              <br />
              <br />
              The enchanting vibe of Kashmir once illuminated with students,
              scholars, seekers, researchers, writers, philosophers, pundits,
              and polymaths. The vibrant society attracted geniuses from all
              parts, engaged in churning huge inter-disciplinary knowledge
              systems & compiled some fabulous pieces of deep wisdom.
              <br />
              <br />
              They covered milestones in the fields of science, philosophy,
              arts, performing arts, literature, trade & spirituality.
            </p>
            <p className="mt-6 text-sm leading-4 text-black">
              <strong>Dark - is deception, ignorance & suffering</strong>
              <br />
              <br />
              A long arduous period of instability & chaos eclipsed the blessed
              land of Kashyapa. This resulted in the exodus of its revered
              gurukuls, destruction of its knowledge systems, plundering of its
              libraries & prestigious universities.
              <br />
              <br />
              The collapse of other critical pillars of a society soon followed
              & the illuminating land of geniuses was poisoned in dark.
            </p>
            <p className="mt-4 text-lg font-semibold text-black">
              #KLF2024 is an effort to bring back the Light.
            </p>
            <button className="mt-6 px-8 py-2 bg-[#BA451C] text-white rounded-full shadow-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className=" w-[50%]">
            <img
              src={book}
              alt="Kashmir Literature Festival"
              className="rounded-xl h-[85vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
