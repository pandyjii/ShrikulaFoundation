import partner from "../assets/partner.svg";

export const PartnerPage = () => {
  return (
    <div className="flex items-center justify-center md:py-5 font-inter px-4">
      <div className="text-center">
        {/* Heading */}
        <p className="text-xl md:text-2xl font-bold text-black">
          Festival Partners
        </p>

        {/* Partner Image */}
        <img
          src={partner}
          alt="partner"
          className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] mt-4"
        />
      </div>
    </div>
  );
};
