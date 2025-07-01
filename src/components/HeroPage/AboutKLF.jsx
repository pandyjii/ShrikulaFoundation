import { useNavigate } from "react-router-dom";
export const AboutKLF = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/klf2025');
  }
  return (
    <div className="">
      <div className="px-8 py-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center  gap-10">
        {/* Text Section */}
        <div className="md:w-[80%] text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <h3 className="text-3xl font-bold text-white">KLF 2025</h3>
          <div className="space-y-6 sm:text-lg">
          <p className="text-white">
           Set beneath the Zabarwan peaks and along the waters of Dal, the Kashmir Literature Festival returns — sharper in vision, deeper in purpose.
          </p>
          <p className="text-white">
            More than a literary event, KLF is a civilizational statement: a confluence of ideas, identity, and inspiration. It is where events become stories, and culture becomes the primary driving force. From its remarkable debut in 2024, KLF now strides forward — to awaken young minds & reclaim Kashmir’s intellectual legacy.
          </p>
          <p className="text-white">
            KLF 2025 aims to host the most valuable churn in Srinagar for the global community.
          </p>
          <button className="mt-6 px-8 py-2 bg-[#BA451C] text-white hover:bg-[#fff] rounded-full shadow-lg hover:text-black transition" onClick={handleClick}>
              Learn More
          </button>
          </div>
        </div>
        {/* Image Section */}
        
      </div>
      </div>
  );
};
