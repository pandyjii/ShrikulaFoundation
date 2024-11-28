import { AboutKLF } from "./AboutKLF";
import { CountDownTimer } from "./CountDownTimer";
import CulturalPerformances from "./CulturalPerformances";
import { DisplayPage } from "./DisplayPage";
import { Gallery } from "./Gallery";
import { InspiringVoices } from "./InspiringVoices";
import { InstagramReels } from "./InstagramReel";
import { NewsMedia } from "./NewMedia";
import { FestivalPartners } from "./PartnerPage";
import leafsBg from "../assets/klfBg.png";
import { useEffect } from "react";

export function Hero() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${leafsBg})` }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        <DisplayPage />
        <CountDownTimer />
        <AboutKLF />
        <div className="">
          <InspiringVoices />
        </div>
        <div className="">
          <FestivalPartners />
        </div>
        <div className="">
          <CulturalPerformances />
        </div>
        <div className="">
          <Gallery />
        </div>
        <div className="">
          <InstagramReels />
        </div>
        <div className="">
          <NewsMedia />
        </div>
      </div>
    </div>
  );
}
