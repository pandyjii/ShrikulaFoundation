import { useNavigate } from "react-router-dom";
export const AboutKLF = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/klf2024");
  };
  return (
    <div className="">
      <div className="px-8 py-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center  gap-10">
        {/* Text Section */}
        <div className="md:w-[80%] text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-5">About KLF</h2>
          <p className="text-white">
            Kashmir Literature Festival is a flagship initiative under Srikula
            Foundation which aims to build a world-class platform in Srinagar
            for everyone engaged in absorbing & spreading knowledge.
          </p>
          <h3 className="text-2xl font-bold text-white mt-10 mb-5">KLF 2024</h3>
          <div className="space-y-6 sm:text-lg">
            <p className="text-white">
              The maiden edition of Kashmir LitFest was organised in Dec 2024 24
              in Srinagar. This two day festival was attended by a diverse range
              of people from the UT of JK and outside who enjoyed listening to
              their favourite authors, leaders, thinkers, bureaucrats & artists.
            </p>
            <p className="text-white">
              Kashmir Literature Festival aims to create a global platform in
              Srinagar where ideas, policies, literature, culture, common
              inheritance & diverse philosophies are churned.
            </p>
            <p className="text-white">
              KLF 2024 was a seed sown. The humble, yet impactful event reached
              millions who seek to benefit from the grind of diverse faculties
              and encourage a healthy reading/writing community.
            </p>
            <button
              className="mt-6 px-8 py-2 bg-[#BA451C] text-white hover:bg-[#fff] rounded-full shadow-lg hover:text-black transition"
              onClick={handleClick}
            >
              Learn More
            </button>
          </div>
        </div>
        {/* Image Section */}
      </div>
    </div>
  );
};
