import calenderBg from "../../assets/klfCalender/calenderBg.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";
import kashmirC from "../../assets/klfCalender/kashmirCoisine.png";
import exprience from "../../assets/klfCalender/experience.png";
import book from "../../assets/klfCalender/bookLaunch.png";
import music from "../../assets/klfCalender/music.png";
import dialouge from "../../assets/klfCalender/dialouges.png";
import engaging from "../../assets/klfCalender/engaging.png";

export const KlfCalender = () => {
  // Array of content items
  const calendarItems = [
    {
      id: 1,
      image: book,
      title: "Book Launch & Discussions",
    },
    {
      id: 2,
      image: exprience,
      title: "Experience the Dal Lake view",
    },
    {
      id: 3,
      image: kashmirC,
      title: "Kashmiri Cuisine ",
    },
    {
      id: 4,
      image: dialouge,
      title: "Dialogues and Interactions",
    },
    {
      id: 5,
      image: engaging,
      title: "Exhibitions and Bookstores ",
    },
    {
      id: 6,
      image: music,
      title: "Cultural Gala Evenings",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen md:min-h-[55vh] lg:min-h-screen pb-10"
      style={{ backgroundImage: `url(${calenderBg})` }}
    >
      <div className="w-full h-full bg-white bg-opacity-30 flex flex-col justify-center items-center text-black font-inter">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-4 mt-8">
          <h1 className="text-2xl md:text-4xl font-bold">#KLF2024 Calendar</h1>
          <p className="text-lg md:text-xl mt-2 font-semibold">7th & 8th December</p>
          <div className="flex mt-2 items-center">
            <img src={leafs} alt="leaf" className="-rotate-45 h-10"/>
            <p className="text-lg">Theme:</p>
            <img src={leafs} alt="leaf" className="h-10"/>
          </div>
          <p className="italic ">
            "Kashmir - The ancient powerhouse of wisdom"
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {calendarItems.map((item) => (
            <div key={item.id} className="p-2 text-center">
              <div className="rounded-3xl border-[1px] border-white overflow-hidden hover:scale-105">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-[230px] h-72"
                    />
              </div>
              <h2 className="text-sm font-semibold mt-2">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
