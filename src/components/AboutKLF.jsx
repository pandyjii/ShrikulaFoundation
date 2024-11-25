import leafsBg from "../assets/leafBg.svg";
import book from "../assets/book.png";
export const AboutKLF = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${leafsBg})` }}
    >
      <div className="px-8 py-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">About</h2>
          <h3 className="text-xl font-semibold text-red-600">KLF 2024</h3>
          <p className="text-gray-700">
            The first edition of the Kashmir Literature Festival to be held on
            7th & 8th of December, 2024 wishes an atmosphere to allow
            inter-mixing of ideas, literature, culture, common inheritance &
            diverse philosophies.
          </p>
          <p className="text-gray-700">
            Our objective is to facilitate young minds, a medium to absorb the
            wealth of information we aim to grind. We attempt to empower
            millions who seek to benefit from the wealth of knowledge we aim to
            generate.
          </p>
          <p className="text-gray-700">
            Under the Zabarwan mountains & on the banks of Dal, the Kashmir
            Literature Festival aspires to build Srinagar into a knowledge hub
            and carve Kashmir's way on the world stage as the 'Powerhouse of
            Wisdom.'
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Learn More
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={book}
            alt="KLF 2024"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
