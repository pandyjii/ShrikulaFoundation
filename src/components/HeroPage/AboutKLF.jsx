import { useNavigate } from "react-router-dom";
export const AboutKLF = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/klf2024');
  }
  return (
    <div className="">
      <div className="px-8 py-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center  gap-10">
        {/* Text Section */}
        <div className="md:w-[80%] text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <h3 className="text-3xl font-bold text-white">KLF 2024</h3>
          <div className="space-y-6 sm:text-lg">
          <p className="text-white">
            The first edition of the Kashmir Literature Festival to be held on
            7th & 8th of December, 2024. KLF wishes an atmosphere to allow
            inter-mixing of ideas, literature, culture, common inheritance &
            diverse philosophies.
          </p>
          <p className="text-white">
            Our objective is to facilitate young minds, a medium to absorb the
            wealth of information we aim to grind. We attempt to empower
            millions who seek to benefit from the wealth of knowledge we aim to
            generate.
          </p>
          <p className="text-white">
            Under the Zabarwan mountains & on the banks of Dal, the Kashmir
            Literature Festival aspires to build Srinagar into a knowledge hub
            and carve Kashmir's way on the world stage as the 'Powerhouse of
            Wisdom.'
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
