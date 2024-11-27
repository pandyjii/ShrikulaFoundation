import React from "react";
import visionImage from "../assets/aboutUs/aboutUs.png";

export function AboutUs() {
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
      {/* Section Title */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
        OUR VISION
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <h2 className="text-4xl font-bold text-gray-900">CREATING STRENGTH</h2>
          <h3 className="text-xl font-medium text-gray-600">
            The world respects you, when you respect yourself.
          </h3>
          <p>
            The indigenous rich culture of Bharat has suffered grave humiliation
            in the past few centuries. Our dharma was mocked, our Gurukuls were
            forced to shut, our people were stripped from their possessions and
            many from their source of livelihood. In fact, many new studies are
            still being done to acknowledge the quantum of damage done to Bharat
            by medieval & modern colonialists.
          </p>
          <p>
            An inherent brilliance of its people & the blessings from the gods
            has made Bharat a competent player on the global stage in recent
            years. Our samskaras, aspirations, and consistent focus on education
            has helped Bharat achieve new milestones in fields like SpaceTech,
            IT, services, trade, sports, innovation, and many others.
          </p>
          <p>
            Bharat is brimming with its aspiring youth, and this opportunity can
            only be optimally utilised if this vibrant energy is tuned well &
            given precise direction. Our civilisation stands at a very important
            crossroad of its journey, and we believe that effective decisions
            cannot be taken by physically, mentally & spiritually weak people.
            Strength translates to Confidence; Knowledge to Empowerment.
          </p>
          <p>
            In 2024, Srikula Foundation is building platforms such as Kashmir
            LitFest where we allow inter-mixing of ideas, culture, language &
            knowledge systems. A platform which benefits from our diverse
            philosophies & celebrates our common inheritance. Kashmir LitFest is
            an initiative to create a brand which takes Kashmir to the world &
            enlightens it with the wealth of inter-disciplinary knowledge
            systems we prepare to churn. We aim to facilitate our youth an
            atmosphere which allows comprehensive education & true empowerment.
          </p>
          <p>
            Srikula Foundation is also working on creating modern classrooms for
            children, skill-developing schools for youth & scholarships for the
            deserving. In our humble attempts, we’ve received unprecedented
            support and assistance from many individuals as well as
            organisations. We stand humbled for all help received, committed to
            our efforts, and in gratitude to the Mother Divine for everything.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
