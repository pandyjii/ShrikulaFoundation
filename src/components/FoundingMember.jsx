import visionImage from "../assets/aboutUs/aboutUs.png";

export function FoundingMember() {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-2xl font-bold mb-8">Srikula Founding Members</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <div className="w-64 md:w-80">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Yuvraj Srivastava</h2>
            <p>(Chairman)</p>
            <a
              href="mailto:yuvraj@srikula.org"
              className="text-blue-500 hover:underline"
            >
              yuvraj@srikula.org
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Madhav Kumar Surya</h2>
            <p>(General Secretary)</p>
            <a
              href="mailto:madhav@srikula.org"
              className="text-blue-500 hover:underline"
            >
              madhav@srikula.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
