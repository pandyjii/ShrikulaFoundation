import { AboutKLF } from "./AboutKLF";
import { CountDownTimer } from "./CountDownTimer";
import CulturalPerformances from "./CulturalPerformances";
import { DisplayPage } from "./DisplayPage";
import { InspiringVoices } from "./InspiringVoices";
import { KlfHome } from "./KlfHome";
import { OurVision } from "./OurVision";
import { PartnerPage } from "./PartnerPage";

export function Hero() {
  return (
    <div>
      <DisplayPage />
      <CountDownTimer/>
      <AboutKLF/>
      <div className="mt-10"><InspiringVoices/></div>
      <div className="mt-10"><PartnerPage/></div>
      <div className="mt-10"><CulturalPerformances/></div>
      <div className="mt-10"><KlfHome/></div>
      <div className="mt-10"><OurVision/></div>
    </div>
  );
}
