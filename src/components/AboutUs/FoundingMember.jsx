import visionImage from "../../assets/aboutUs/aboutUs.png";
import madav from "../../assets/madav.png";
import yovraj from "../../assets/youvraj.png";

export function FoundingMember() {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-16">Srikula Founding Members</h1>
      <div className="flex flex-col items-center md:flex-row md:items-start space-y-10 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10 gap-6">
          {/* Member 1 */}
          <div className="flex flex-col items-center text-center md:text-left">
            <img src={yovraj} className="w-32 h-32 md:w-44 md:h-44 rounded-full" />
            <h2 className="text-xl font-bold mt-4">Yuvraj Srivastava</h2>
            <p className="font-semibold">(Chairman)</p>
            <a
              href="mailto:yuvraj@srikula.org"
              className="font-semibold  hover:underline"
            >
              yuvraj@srikula.org
            </a>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center text-center md:text-left">
            <img src={madav} className="w-32 h-32 md:w-44 md:h-44 rounded-full" />
            <h2 className="text-xl font-bold mt-4">Madhav Kumar Surya</h2>
            <p className="font-semibold">(General Secretary)</p>
            <a
              href="mailto:madhav@srikula.org"
              className="font-semibold  hover:underline"
            >
              madhav@srikula.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
