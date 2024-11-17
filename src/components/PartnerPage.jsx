import partnerBg from "../assets/partnerBg.svg";
import partner from "../assets/partner.svg";

export const PartnerPage = () => {
  return (
    <div
      className="h-[20vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${partnerBg})` }}
    >
      {/* Content */}
      <div className="flex items-center justify-center h-full font-inter">
        <div className="text-center">
          <p className=" text-sm font-medium text-black font-inter">
            Festival Partners
          </p>
          <img src={partner} alt="partner" className="w-[70vw] mt-2"/>
        </div>
      </div>
    </div>
  );
};
