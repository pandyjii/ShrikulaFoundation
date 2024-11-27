import partner from "../assets/partner.svg";

export const PartnerPage = () => {
  return (
    <div className="flex max-h-screen sm:items-center justify-center py-5 font-inter px-4">
      <div className="flex w-full flex-col justify-center items-center relative sm:top-0 -top-8 ">
        {/* Heading */}
        <p className="text-xl md:text-2xl font-bold text-white text-center">
          Festival Partners
        </p>

        {/* Partner Image */}
        <img
          src={partner}
          alt="partner"
          className="w-full sm:h-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[70vw] mt-3 sm:mt-4"
        />
      </div>
    </div>
  );
};
