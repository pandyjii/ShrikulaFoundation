import partner from "../assets/partner.svg";

export const PartnerPage = () => {
  return (
      <div className="flex items-center justify-center h-full font-inter">
        <div className="text-center">
          <p className=" text-lg font-bold text-black font-inter">
            Festival Partners
          </p>
          <img src={partner} alt="partner" className="w-[70vw] mt-2"/>
        </div>
      </div>
  );
};
