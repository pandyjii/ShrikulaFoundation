import homeImg from "../assets/homeImg.svg";

export const DisplayPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homeImg})` }} // Use the imported image variable
    >
      {/* Content */}
      <div className="flex items-center justify-center h-full font-inter">
        <div className="relative">
          <p className="absolute left-[6.7rem] bottom-[2.5vh] w-[100px] text-gray-800 font-semibold font-inter">
            First Edition
          </p>
        </div>
        <div className="text-center relative top-[35vh]">
          <p className=" text-xl font-semibold text-gray-600 font-inter">
            7th & 8th of December 2024
          </p>
          <p className="mt-1 text-gray-600 text-base font-semibold font-inter">
            at Dal Lakefront. SKICC, Srinagar. Bharat
          </p>
          <button className="mt-8 px-6 py-3 text-center text-white text-sm bg-[#893518] rounded-full hover:bg-white hover:text-black transition border-[1px] border-white">
            Free Registration
          </button>
        </div>
      </div>
    </div>
  );
};
