import React, { useState, useRef, useEffect } from "react";
import calenderBg from "../../assets/klfCalender/calenderBg.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";
import kashmirC from "../../assets/klfCalender/kashmirCoisine.png";
import exprience from "../../assets/klfCalender/experience.png";
import book from "../../assets/klfCalender/bookLaunch.png";
import music from "../../assets/klfCalender/music.png";
import dialouge from "../../assets/klfCalender/dialouges.png";
import engaging from "../../assets/klfCalender/engaging.png";
import klfImage from "../../assets/klfCalender/klfImage.png";
import allBook from "../../assets/klfCalender/allBook.png";

export const KlfCalender = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Create a ref for the pop-up container

  // Close pop-up when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close pop-up
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const calendarItems = [
    {
      id: 1,
      image: book,
      title: "Book Launch & Discussions",
      action: () => setShowPopup(true),
    },
    {
      id: 2,
      image: exprience,
      title: "Experience the Dal Lake view",
    },
    {
      id: 3,
      image: kashmirC,
      title: "Kashmiri Cuisine",
    },
    {
      id: 4,
      image: dialouge,
      title: "Dialogues and Interactions",
    },
    {
      id: 5,
      image: engaging,
      title: "Exhibitions and Bookstores",
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
        <div className="flex flex-col items-center justify-center mb-4 mt-8">
          <h1 className="text-2xl md:text-4xl font-bold">#KLF2024 Calendar</h1>
          <p className="text-lg md:text-xl mt-2 font-semibold">7th & 8th December</p>
          <div className="flex mt-2 items-center">
            <img src={leafs} alt="leaf" className="-rotate-45 h-10" />
            <p className="text-lg">Theme:</p>
            <img src={leafs} alt="leaf" className="h-10" />
          </div>
          <p className="italic">"Kashmir - The ancient powerhouse of wisdom"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {calendarItems.map((item) => (
            <div
              key={item.id}
              className="p-2 text-center cursor-pointer"
              onClick={item.action || null}
            >
              <div className="rounded-3xl border-[1px] border-white overflow-hidden hover:scale-105">
                <img src={item.image} alt={item.title} className="w-[230px] h-72" />
              </div>
              <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            ref={popupRef} // Attach the ref to the pop-up container
            className="bg-white rounded-3xl p-6 max-w-4xl w-full flex flex-col items-center h-[98vh] overflow-y-auto relative"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <button
              className="absolute right-6 top-2 font-bold text-white px-2 rounded-md bg-slate-400 "
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            <img src={klfImage} alt="Kashmir Literature Festival" />
            <h2 className="text-3xl text-[#B88908] font-bold text-center uppercase my-10">
              Books Featuring at KLF
            </h2>
            <div className="flex justify-center items-center">
              <img src={allBook} alt="Books" className="w-[50vw] h-auto" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
