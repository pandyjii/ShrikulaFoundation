import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black font-inter text-white px-8 py-4">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" /> // Close icon
          ) : (
            <FaBars className="text-2xl" /> // Hamburger icon
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
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

        {/* Register Button (Desktop) */}
        <div className="hidden lg:block">
          <NavLink
            to="/register"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Register Now
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-4 text-sm font-medium bg-black px-4 py-4 rounded-md shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "hover:text-orange-500"
            }
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/register"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
