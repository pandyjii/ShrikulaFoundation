import React, { useState } from "react";
import inspireBg from "../assets/inspiringVoiceImg/inspirationBg.png";
import ajay from "../assets/inspiringVoiceImg/ajayRaina.png";
import ami from "../assets/inspiringVoiceImg/amiGanatra.png";
import anuj from "../assets/inspiringVoiceImg/AnujDhar.png";
import chandra from "../assets/inspiringVoiceImg/chandrachur.png";
import ashok from "../assets/inspiringVoiceImg/drAshok.png";
import pandey from "../assets/inspiringVoiceImg/genPandey.png";
import javed from "../assets/inspiringVoiceImg/javedBeigh.png";
import kallol from "../assets/inspiringVoiceImg/kallol.png";
import kanwal from "../assets/inspiringVoiceImg/kanwal.png";
import namrata from "../assets/inspiringVoiceImg/namrata.png";
import rahul from "../assets/inspiringVoiceImg/RahulDewan.png";
import raja from "../assets/inspiringVoiceImg/rajaMuneeb.png";
import ramnik from "../assets/inspiringVoiceImg/ramnik.png"
import ravindra from "../assets/inspiringVoiceImg/ravindraPandit.png";
import shela from "../assets/inspiringVoiceImg/shehla.png";
import shiv from "../assets/inspiringVoiceImg/shivKunal.png";
import quraisi from "../assets/inspiringVoiceImg/syQuraishi.png";
import yana from "../assets/inspiringVoiceImg/yanaMir.png";
export const InspiringVoices = () => {
  const speakers = [
    {
      name: "Lt. Gen. D. P. Pandey",
      role: "Former Commander, Chinar Corps",
      topic: "Kashmir: Past, Present, and Future",
      image: pandey,
    },
    {
      name: "Yana Mir",
      role: "Kashmir First Female Blogger",
      topic: "",
      image: yana,
    },
    {
      name: "Amb. Kanwal Sibal",
      role: "Former Foreign Secretary of India & Chancellor, JNU",
      topic: "Indian Diplomacy in Changing Times",
      image: kanwal,
    },
    {
      name: "Dr. Ashok Lahiri",
      role: "Former Chief Economic Advisor, Government of India",
      topic: "Economic Growth and Challenges in India",
      image: ashok,
    },
    {
      name: "Raja Muneeb",
      role: "Journalist",
      topic: "Columnist & Geo-political observer",
      image: raja,
    },
    {
      name: "Namrata Wakhloo",
      role: "Author",
      topic: "Chronicler & Photographer",
      image: namrata,
    },
    {
      name: "S. Y. Quraishi",
      role: "Former Chief Election Commissioner of India",
      topic: "Democracy and Electoral Reforms",
      image: quraisi,
    },
    {
      name: "Javed Beigh",
      role: "Social Activist",
      topic: "Representing J&K at UN",
      image: javed,
    },
    {
      name: "Shiv Kunal Verma",
      role: "Filmmaker & War Historian",
      topic: "Visual Storytelling in Indian History",
      image: shiv,
    },
    {
      name: "Ramneek Singh Maan",
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
      name: "Chandrachur Ghose",
      role: "Author & Researcher",
      topic: "Unsung Heroes of Indian Freedom Struggle",
      image: chandra,
    },
    {
      name: "Anuj Dhar",
      role: "Author & Researcher",
      topic: "Netaji and the Mystery of INA",
      image: anuj,
    },
  ];
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: `url(${inspireBg})` }}
    >
      {/* Heading Section */}
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="bg-[#FBB59C] w-fit px-4 py-3 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-black">
            Meet Our Inspiring Voices
          </h2>
        </div>
        <p className="mt-4 text-lg text-black text-center">
          Celebrating the Minds Shaping Kashmiri Literature and Culture
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="overflow-hidden">
        <div className="flex space-x-4 animate-scrollSmInspire sm:animate-scroll">
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
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-black">
                  {speaker.role}
                </h3>
                <h4 className="text-base font-bold text-black">{speaker.name}</h4>
              </div>
              {/* Popup for Speaker Details */}
              {hoveredSpeaker === index && (
                <div className="absolute top-0 left-0 bg-white/90 p-4 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-lg z-10">
                  <h3 className="text-lg font-bold text-black">{speaker.name}</h3>
                  <p className="text-sm text-black mt-2">{speaker.role}</p>
                  <p className="text-sm text-black mt-2 italic">{speaker.topic}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};