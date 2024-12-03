import instagram from "../assets/footer/Instagram.png";
import facebook from "../assets/footer/Facebook.png";
import twitter from "../assets/footer/twitter.png";
import footerBg from "../assets/footer/footerBg.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export function Footer() {
  return (
    <div
      className=" flex flex-col md:flex-row justify-center py-14 sm:py-10 gap-10 sm:px-18 md:pl-10 relative"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Address Section */}
      <div className="flex flex-col items-start justify-center gap-4 md:w-1/3 px-4 text-black font-inter">
        <p className="text-xl font-semibold">Address</p>
        <p className="text-sm md:text-base">
          At Dal Lakefront, SKICC, Srinagar, Bharat, 24800
        </p>
        {/* Embedded Google Map */}
        <div className="map-container w-full max-w-[400px] h-[250px] border border-gray-300 rounded-lg shadow-md overflow-hidden text-black font-inter">
          <iframe
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACxc35CQpI0mZsknOyBKC3UbvJP24iD98&q=Dal+Lakefront,+SKICC,+Srinagar,+Bharat,+24800"
          ></iframe>
        </div>
      </div>

      {/* Company and Resources Section */}
      <div className="flex flex-col items-start gap-6 md:w-[50vw] px-4 text-black font-inter">
        <div className="flex flex-wrap justify-center  items-center w-full gap-36">
          {/* Company Links */}
          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold"></p>
            <Link to={"/"} className="text-sm md:text-base">
              Home
            </Link>
            <div className="flex items-center w-full gap-7 py-4">
              <a
                href="https://www.facebook.com/share/17We5HFBxg/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook Icon" className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com/kashmirlitfest/profilecard/?igsh=MW81cWZ4MXBqNnh4bA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram Icon" className="h-8 w-8" />
              </a>
              <a
                href="http://www.x.com/kashmirlitfest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Instagram Icon" className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold"></p>
            <p className="text-sm md:text-base">Blog</p>
            <p className="text-sm md:text-base">Events</p>
            <p className="text-sm md:text-base">Books</p>
          </div>
        </div>

        {/* Social Media Icons */}
      </div>

      {/* Contact and Subscription Section */}
      <div className="flex flex-col items-start gap-4 md:w-1/3 px-4 text-black font-inter">
        <p className="text-xl font-semibold">Parent</p>
        <div className="flex items-start gap-3">
          <FaGlobe className="text-xl " />
          <Link to={"/about"} className="text-sm md:text-base">
            Srikula
          </Link>
        </div>
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-xl " />
          <p className="text-sm md:text-base">
            2nd floor, Opposite Townhall. Budgam - 191111. Bharat
          </p>
        </div>
        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-xl" />
          <div className="text-sm md:text-base">
            <a
              href="tel:+916200035190"
              className="hover:text-gray-800 transition mr-1"
            >
              +91 6200035190
            </a>
            /
            <a
              href="tel:+919682330263"
              className="hover:text-gray-800 transition ml-1"
            >
              +91 9682330263
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-xl " />
          <p className="text-sm md:text-base">
            <a
              href="mailto:contact@srikula.org"
              className=" hover:underline"
            >
              contact@srikula.org
            </a>
          </p>
        </div>
        {/* Subscription Form */}
        <div className="flex flex-col gap-4 text-black font-inter">
          <p className="text-lg md:text-xl">Subscribe for More News</p>
          <div className="flex items-center rounded-lg bg-white p-1 shadow-lg">
            <input
              type="text"
              placeholder="Email Address"
              className="md:w-10 lg:w-full flex-1 px-3 py-2 text-black text-sm md:text-base focus:outline-none"
            />
            <button className=" bg-[#FBB59C] hover:bg-[#BA451C] px-4 py-2 rounded-lg text-sm md:text-base text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="flex absolute bottom-2 left-12 sm:left-[45vw] sm:bottom-4 items-center font-inter gap-1">
        <p>
          © 2024 KLF | Powered by{" "}
          <span className="bg-black py-2 px-3 ml-1 text-sm font-bold text-white">
            Denion
          </span>
        </p>
      </div>
    </div>
  );
}
