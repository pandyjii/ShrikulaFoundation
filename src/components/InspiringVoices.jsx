import React from "react";
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
      name: "S. Y. Quraishi",
      role: "Former Chief Election Commissioner of India",
      topic: "Democracy and Electoral Reforms",
      image: quraisi,
    },
    {
      name: "Prof. Nilofer Khan",
      role: "Vice-Chancellor, Kashmir University",
      topic: "Higher Education in Conflict Zones",
      image: ami,
    },
    {
      name: "Dr. S. K. Manjul",
      role: "Addl DG, Archaeological Survey of India",
      topic: "Preserving India's Heritage",
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
        <div className="flex animate-scrollSm sm:animate-scroll whitespace-nowrap">
          {[...speakers, ...speakers].map((speaker, index) => (
            <div
              key={index}
              className="min-w-[150px] md:min-w-[200px] lg:min-w-[250px] mx-4 overflow-hidden"
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
                <h4 className="text-lg font-bold text-black">
                  {speaker.name}
                </h4>
                <p className="mt-2 text-sm text-black">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
