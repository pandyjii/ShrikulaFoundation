import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="bg-black font-inter text-white flex items-center justify-around px-8 py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src= {logo} // Replace with your logo path
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/klf2024"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          KLF 2024
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-500"
              : "hover:text-orange-500"
          }
        >
          Gallery
        </NavLink>
      </div>

      {/* Register Button */}
      <div>
        <NavLink
          to="/register"
          className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Register Now
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
