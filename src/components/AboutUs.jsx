import React, { useEffect } from "react";
import visionImage from "../assets/aboutUs/aboutUs.png";
import inspireBg from "../assets/klfCalender/calenderBg.png";

export function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the window
  }, []);
  

  return (
    <div
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${inspireBg})` }}
  >
    <div className=" py-10 px-6 lg:px-16">
      {/* Section Title */}
      <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-8 lg:mb-12">
        OUR VISION
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-[33vw] space-y-6 text-gray-700">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            CREATING STRENGTH
          </h2>
          <h3 className="text-lg lg:text-xl font-medium text-gray-600">
            The world respects you when you respect yourself.
          </h3>
          <p className="leading-relaxed">
            The indigenous rich culture of Bharat has suffered grave humiliation
            in the past few centuries. Our dharma was mocked, our Gurukuls were
            forced to shut, and our people were stripped of their possessions and
            livelihood. Many new studies still acknowledge the quantum of damage
            done to Bharat by colonialists.
          </p>
          <p className="leading-relaxed">
            Despite this, Bharat's inherent brilliance and blessings have made
            it a global player. Our focus on education has driven achievements
            in SpaceTech, IT, trade, sports, and more.
          </p>
          <p className="leading-relaxed">
            Bharat's youth holds immense potential, which can only be harnessed
            through direction and strength. We believe effective decisions are
            made by individuals strong in body, mind, and spirit.
          </p>
          <p className="leading-relaxed">
            In 2024, Srikula Foundation is building platforms such as Kashmir
            LitFest to mix ideas, cultures, and knowledge systems. This initiative
            aims to take Kashmir to the world and empower youth through
            comprehensive education.
          </p>
          <p className="leading-relaxed">
            Srikula Foundation is also creating modern classrooms, skill-developing
            schools, and scholarships. We are grateful for the support received
            and committed to our mission.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-[25vw]">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg shadow-md object-cover  sm:h-[38vw]"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
