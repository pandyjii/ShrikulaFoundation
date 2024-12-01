import React, { useEffect, useRef, useState } from "react";
import inspireBg from "../../assets/inspiringVoiceImg/inspirationBg.png";
import aadi from "../../assets/inspiringVoiceImg/aadi.png";
import manjul from "../../assets/inspiringVoiceImg/dr. sk manjul.png";
import henna from "../../assets/inspiringVoiceImg/henana.png";
import ami from "../../assets/inspiringVoiceImg/amiGanatra.png";
import anuj from "../../assets/inspiringVoiceImg/AnujDhar.png";
import chandra from "../../assets/inspiringVoiceImg/chandrachur.png";
import ashok from "../../assets/inspiringVoiceImg/drAshok.png";
import pandey from "../../assets/inspiringVoiceImg/dp pandey.png";
import javed from "../../assets/inspiringVoiceImg/javedBeigh.png";
// import kallol from "../assets/inspiringVoiceImg/kallol.png";
import kanwal from "../../assets/newsMedia/kanwal.png";
import namrata from "../../assets/inspiringVoiceImg/namrata.png";
import raja from "../../assets/inspiringVoiceImg/rajaMuneeb.png";
import ramnik from "../../assets/inspiringVoiceImg/ramneek singh maan.png";
import ravindra from "../../assets/inspiringVoiceImg/ravindra.png";
import nilofer from "../../assets/inspiringVoiceImg/nilofer khan.png";
import shela from "../../assets/inspiringVoiceImg/shehla rashid.png";
import shiv from "../../assets/inspiringVoiceImg/shiv-kunal-verma.jpg";
import quraisi from "../../assets/inspiringVoiceImg/syQuraishi.png";
import yana from "../../assets/inspiringVoiceImg/yanaMir.png";
import Kallol from "../../assets/Kallol.png"
export const InspiringVoices = () => {
  const speakers = [
    {
      name: "Lt. Gen. D. P. Pandey",
      role: "Former Commander, Chinar Corps",
      topic: "Kashmir: Past, Present, and Future",
      image: pandey,
    },
    {
      name: "Raja Muneeb",
      role: "Journalist, Columnist & Geo-political observer",
      topic: "Columnist & Geo-political observer",
      image: raja,
    },
    {
      name: "Amb. Kanwal Sibal",
      role: "Former Foreign Secretary of India & Chancellor, JNU",
      topic: "Indian Diplomacy in Changing Times",
      image: kanwal,
    },
    {
      name: "Namrata Wakhloo",
      role: "Author Chronicler & Photographer",
      topic: "Chronicler & Photographer",
      image: namrata,
    },
    {
      name: "Dr. Ashok Lahiri",
      role: "Former Chief Economic Advisor, Government of India",
      topic: "Economic Growth and Challenges in India",
      image: ashok,
    },
    {
      name: "Dr. S.K. Manjul",
      role: "Add'l DG, Archaeological Survey of India ",
      topic: "Archaeological Survey of India",
      image: manjul,
    },
    {
      name: "Kallol Bhattarcherjee",
      role: "Author & Jounalist",
      topic: "The Revival of Sanskrit Literature",
      image: Kallol,
    },
    {
      name: "S. Y. Quraishi",
      role: "Former Chief Election Commissioner of India",
      topic: "Democracy and Electoral Reforms",
      image: quraisi,
    },
    {
      name: "Yana Mir",
      role: "Kashmir's First Female Vlogger",
      topic: "",
      image: yana,
    },
    {
      name: "Javed Beigh",
      role: "Social Activist, Representing J&K at UN",
      topic: "Representing J&K at UN",
      image: javed,
    },
    {
      name: "Ravinder Pandita",
      role: "President - Save Sharada Commitee & AIKS; Author",
      topic: "Save Sharada Commitee & AIKS; Author",
      image: ravindra,
    },
    {
      name: "Shiv Kunal Verma",
      role: "Filmmaker & War Historian",
      topic: "Visual Storytelling in Indian History",
      image: shiv,
    },
    {
      name: "Dr. Henana Berges",
      role: "Poet, Stroryteller & Author",
      topic: "",
      image: henna,
    },
    {
      name: "Ramnik Singh Maan",
      role: "Observer & Speaker",
      topic: "The Role of Sikh History in Modern India",
      image: ramnik,
    },
    {
      name: "Ami Ganatra",
      role: "Author & Sanskrit Scholar",
      topic: "The Revival of Sanskrit Literature",
      image: ami,
    },
    {
      name: "Shehla Rashid",
      role: "Author, Speaker & Policy Consultant",
      topic: "Youth and Policy Reformation in India",
      image: shela,
    },
    {
      name: "Aadi Achint",
      role: "Founder, DEF talks & Geopolitical Observer",
      topic: "",
      image: aadi,
    },
    {
      name: "Chandrachur Ghose",
      role: "Author & Researcher",
      topic: "Unsung Heroes of Indian Freedom Struggle",
      image: chandra,
    },
    {
      name: "Prof. Nilofer Khan",
      role: "Vice-Chancellor, Kashmir University",
      topic: "",
      image: nilofer,
    },
    {
      name: "Anuj Dhar",
      role: "Author & Researcher",
      topic: "Netaji and the Mystery of INA",
      image: anuj,
    },
  ];
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 2;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset scroll
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >
      {/* Heading Section */}
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="bg-[#FBB59C] w-fit px-4 py-3 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-black">
            Meet Our Speakers
          </h2>
        </div>
        <p className="mt-4 text-lg text-black text-center">
          Celebrating the Minds Shaping Kashmiri Literature and Culture
        </p>
      </div>

      {/* Scrolling Container */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={scrollContainerRef}
      >
        <div className="flex space-x-4">
          {[...speakers, ...speakers].map((speaker, index) => (
            <div
              key={index}
              className="min-w-[250px] relative group"
              onMouseEnter={() => setHoveredSpeaker(index)}
              onMouseLeave={() => setHoveredSpeaker(null)}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-[310px] object-cover rounded-lg"
              />
              <div className="p-4 text-center">
                <h4 className="text-base font-bold text-black">
                  {speaker.name}
                </h4>
                <h3 className="text-sm font-semibold text-black">
                  {speaker.role}
                </h3>
               
              </div>
              {/* Popup for Speaker Details */}
              {hoveredSpeaker === index && (
                <div className="absolute top-0 left-0 bg-[#FBB59C] p-6 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-lg z-10 border- border-blue-200">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-24 h-30 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-black text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-black mt-1 text-center">
                    {speaker.role}
                  </p>
                  <p className="text-sm text-black mt-4 text-center">
                    {speaker.topic}
                  </p>
                  <p className="text-xs text-black mt-4 text-center">
                    {`The first edition of the Kashmir Literature Festival to be held on 7th & 8th of December, 2024 wishes an atmosphere.`}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};