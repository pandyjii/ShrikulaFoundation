import yajna from "../../assets/kashmirLitFest/yajna.png";
import platform from "../../assets/kashmirLitFest/platform.png";
import initiative from "../../assets/kashmirLitFest/initiative.png";
import source from "../../assets/kashmirLitFest/source.png";
import effort from "../../assets/kashmirLitFest/effort.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";

const data = [
  {
    title: "A yajna",
    description:
      "KLF is a yajna to invoke Ma Sharada & seek her guidance to the path of knowledge",
    image: yajna,
  },
  {
    title: "A platform",
    description: "KLF is a platform which thinks, educates & creates",
    image: platform,
  },
  {
    title: "An initiative",
    description:
      "KLF is an initiative to allow inter-mixing of ideas, culture, literature, common inheritance & diverse philosophies",
    image: initiative,
  },
  {
    title: "A source",
    description:
      "KLF is a source of empowerment to many who seek to benefit from the wealth of knowledge we aim to generate",
    image: source,
  },
  {
    title: "An effort",
    description:
      "KLF is an effort to put Kashmir back on the global map as 'The powerhouse of wisdom'",
    image: effort,
  },
];

export const KashmirLitFest = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4">
      <div className="flex mt-2 items-center justify-center mb-5">
        <img src={leafs} alt="leaf" className="-rotate-45 h-14" />
        <h1 className="text-center text-xl font-bold">
          Kashmir LitFest
        </h1>
        <img src={leafs} alt="leaf" className="h-14" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-3xl overflow-hidden hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-[230px] h-72"
              />
            </div>
            <h2 className="text-sm font-semibold lg:mt-2">{item.title}</h2>
            <p className="text-center md:w-[60%] lg:w-[85%] lg:mt-2 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
