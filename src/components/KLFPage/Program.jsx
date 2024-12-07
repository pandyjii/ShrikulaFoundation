import React, { useState } from "react";
import programBg from "../../assets/klfCalender/programBg.png";
import polygon from "../../assets/klfCalender/Polygon.png";
export const ProgramSchedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const programs = {
    1: [
      {
        time: "10:00 AM - 10:50 AM",
        title: "Opening Ceremony",
      },
      {
        time: "11:00 AM - 11:50 AM",
        title: "Kashmir: The Jewel Crown of Bharat",
        details:
          "Ravindra Pandita & Namrata Wokhloo in conversation with Ami Ganatra",
      },
      {
        time: "11:50 AM - 12:30 PM",
        title: "Let's zoom out on Kashmir",
        details:
          "Lt. Gen. D. P. Pandey (Retd) in conversation with Raja Muneeb & Shehla Rashid",
      },
      {
        time: "12:30 PM - 12:45 PM",
        title: "A Soulful Poetry Gig by Dr. Henana Berjes",
      },
      {
        time: "12:45 PM - 01:40 PM",
        title: "Integration or Exclusivity: The Road to Kashmir's Prosperity",
        details:
          "Mirwais Latief, Arun Prabhat, Azra Mufti & Emaad Makhdoomi in conversation with Jehanzeb Allagaband",
      },
      {
        time: "01:40 PM - 02:30 PM",
        title:
          "Nehru's First Recruits: The Diplomats Who Built Independent India's Foreign Policy",
        details:
          "Kallol Bhattacharjee & Amb. Kanwal Sibal in conversation with Chandrachur Ghose",
      },
      {
        time: "02:30 PM - 03:30 PM",
        title: "Book Launch - Yodha II : Illustrated Military History of India",
        details:
          "Launch by Lt. Gen. D. P. Pandey (Retd); Shiv Kunal Verma & Ramnik Singh Mann in conversation with Aadi Achint",
      },
      {
        time: "03:30 PM - 04:30 PM",
        title:
          "India's Experiments with Democracy : The Life of a Nation Through its Election",
        details:
          "Dr. S. Y. Quraishi & Dr. Ashok Lahiri in conversation with Kallol Bhattacharjee",
      },
      {
        time: "04:30 PM - 05:00 PM",
        title: "Enchanting Bharatnatyam Performances",
        details: "By Aishwarya Attri & Nandana Moulick",
      },
    ],
    2: [
      {
        time: "10:00 AM - 10:50 AM",
        title: "The Rules for the Rulers",
        details:
          "Ami Ganatra & Dr. Ashok Lahiri in conversation with Chandrachur Ghose",
      },
      {
        time: "10:50 AM - 11:30 AM",
        title: "The Half Front",
        details:
          "Lt. Gen. D. P. Pandey (Retd) & Ramnik Singh Mann in conversation with Shiv Kunal Verma",
      },
      {
        time: "11:30 AM - 12:20 PM",
        title: "Unearthing Bharatiya Heritage Through Archaeology",
        details: "Dr. S. K. Manjul in conversation with Namrata Wakhloo",
      },
      {
        time: "12:20 PM - 01:10 PM",
        title: "Women: The Better Half",
        details:
          "Prof. Nilofer Khan & Dr. Henana Berjes in conversation with Azra Mufti",
      },
      {
        time: "01:10 PM - 02:00 PM",
        title: "Role Model: Inspiring Stories of Indian Muslim Achievers",
        details:
          "Launch by Dr. S. Y. Quraishi & Amb. Kanwal Sibal; Shehla Rashid in conversation with Aadi Achint",
      },
      {
        time: "02:00 PM - 02:50 PM",
        title: "Bharat from the Lens of the World",
        details:
          "Amb. Kanwal Sibal & Dr. S. Y. Quraishi in conversation with Emaad Makhdoomi",
      },
      {
        time: "02:50 PM - 03:30 PM",
        title: "India in Search of Glory: Political Calculus and Economy",
        details: "Dr. Ashok Lahiri in conversation with Ami Ganatra",
      },
      {
        time: "03:30 PM - 05:00 PM",
        title: "Book Launch - Bose Deception: Declassified",
        details:
          "Launch by Lt. Gen. D. P. Pandey (Retd), Amb. Kanwal Sibal, Dr. Ashok Lahiri, & Dr. S. Y. Quraishi; Presentation by Anuj Dhar & Chandrachur Ghose",
      },
      {
        time: "05:00 PM - 05:30 PM",
        title: "Closing Ceremony",
      },
      {
        time: "05:30 PM Onwards",
        title: "Musical Gala Evening",
        details: "By ShashRang Band",
      },
    ],
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-5"
      style={{ backgroundImage: `url(${programBg})` }}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">Programs</h1>
        <p className="text-sm md:text-xl text-black mt-2">
          Discover the Essence of Kashmir Through Our Programs
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setActiveDay(1)}
            className={`px-8 py-2 rounded-full font-medium text-sm md:text-base transition-all ${
              activeDay === 1
                ? "bg-[#CB5513] text-white"
                : "border-2 border-black text-black hover:bg-gray-300"
            }`}
          >
            <p className="text-xl font-semibold">Day 1</p>
            <p>7th December 2024</p>
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-8 py-2 rounded-full font-medium text-sm md:text-base transition-all ${
              activeDay === 2
                ? "bg-[#CB5513] text-white"
                : "border-2 border-black text-black hover:bg-gray-300"
            }`}
          >
            <p className="text-xl font-semibold">Day 2</p>
            <p>8th December 2024</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {programs[activeDay].map((program, index) => (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex items-center">
              <img
                src={polygon}
                alt="polygon"
                className="w-20 h-1 rotate-180 relative bottom-1"
              />
              <h3 className="text-sm md:text-base font-semibold mb-2">
                {program.time}
              </h3>
              <img
                src={polygon}
                alt="polygon"
                className="w-20 h-1 relative bottom-1"
              />
            </div>
            <div
              key={index}
              className="bg-[#CB5513] text-white p-4 rounded-3xl transition-transform hover:-translate-y-2 min-w-96 min-h-36 flex flex-col justify-center items-center"
            >
              <h2 className="text-base md:text-lg font-bold text-center">
                {program.title}
              </h2>
              {program.details && (
                <p className="text-sm text-center mt-2 font-semibold">{program.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
