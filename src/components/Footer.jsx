import React from "react";
import instagram1 from "../assets/instagram.svg";
import vector from "../assets/Vector.svg";
import vector1 from "../assets/Vector2.svg";
import vector2 from "../assets/vector3.svg";

export function Footer() {
  return (
    <div className="bg-black text-white flex justify-around py-10">
      {/* Address Section */}
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">Address</p>
        <p className="w-[20vw]">
          At Dal Lakefront, SKICC, Srinagar, Bharat, 24800
        </p>
        {/* Embedded Google Map */}
        <div
          className="map-container"
          style={{
            width: "100%", // Adjust to fit the parent container
            maxWidth: "400px",
            height: "250px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
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
      <div className="flex-col">
        <div className="w-[25vw] flex justify-around py-3">
          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Company</p>
            <p>Home</p>
            <p>About Me</p>
            <p>Services</p>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Resources</p>
            <p>Blog</p>
            <p>Events</p>
            <p>Books</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="w-[23vw] flex items-center justify-around py-14 px-4">
          <img src={instagram1} alt="Instagram" className="h-8 w-8" />
          <img src={vector} alt="Social Icon 1" className="h-8 w-8" />
          <img src={vector1} alt="Social Icon 2" className="h-8 w-8" />
          <img src={vector2} alt="Social Icon 3" className="h-8 w-8" />
        </div>
      </div>

      {/* Contact and Subscription Section */}
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold">Contact</p>
        <p>Greyson Lane 6212-648 Palarni</p>
        <p>(610) 945-7986</p>
        <p>hello@thedancecorps.co</p>

        {/* Subscription Form */}
        <div className="flex flex-col gap-4 py-7">
          <p className="text-xl">Subscribe for More News</p>
          <div className="flex justify-center items-center py-1 rounded-2xl bg-white px-1">
            <input
              type="text"
              placeholder="Email Address"
              className="pl-3 border-none w-[60%] text-black"
            />
            <button className="bg-[#F69675] w-[40%] text-center pl-3 py-1 rounded-2xl text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
