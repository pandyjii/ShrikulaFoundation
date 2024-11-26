import { AboutKLF } from "./AboutKLF";
import { CountDownTimer } from "./CountDownTimer";
import CulturalPerformances from "./CulturalPerformances";
import { DisplayPage } from "./DisplayPage";
import { Gallery } from "./Gallery";
import { InspiringVoices } from "./InspiringVoices";
import { InstagramReels } from "./InstagramReel";
import { NewsMedia } from "./NewMedia";
import { PartnerPage } from "./PartnerPage";

export function Hero() {
  return (
    <div>
      <DisplayPage />
      <CountDownTimer/>
      <AboutKLF/>
      <div className="mt-10"><InspiringVoices/></div>
      <div className="mt-20 mb-20"><PartnerPage/></div>
      <div className="mt-10"><CulturalPerformances/></div>
      <div className=""><Gallery/></div>
      <div className="mt-10"><InstagramReels/></div>
      <div className="mt-10"><NewsMedia/></div>
    </div>
  );
}
