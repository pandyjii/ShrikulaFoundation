import { CountDownTimer } from "./CountDownTimer";
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
      <PartnerPage/>
      <div className="mt-10"><KlfHome/></div>
      <div className="mt-10"><InspiringVoices/></div>
      <div className="mt-10"><OurVision/></div>
    </div>
  );
}
