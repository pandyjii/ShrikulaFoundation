import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <nav className="bg-black font-inter text-white px-8 py-4">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to ={'/'} className="flex items-center">
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </Link>

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
                ? " border-b-2 border-white"
                : " hover:scale-110"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/klf2024"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : " hover:scale-110"
            }
          >
            KLF 2024
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : " hover:scale-110"
            }
          >
            Srikula
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : " hover:scale-110"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? " border-b-0 border-white"
                : " hover:scale-110"
            }
          >
            Gallery
          </NavLink>
        </div>

        {/* Register Button (Desktop) */}
        <div className="hidden lg:block">
          <NavLink
            to="/register"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-[#BA451C] hover:text-black transition"
          >
            Donate Now
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
                ? " border-b-2 border-white"
                : "hover:"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/klf2024"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : "hover:"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            KLF 2024
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : "hover:"
            }
            onClick={() => setIsMenuOpen(false)}
          >
          Srikula
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? " border-b-2 border-white"
                : "hover:"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " border-b-0 border-white"
                : "hover:"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/register"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-[#BA451C] hover:text-black transition text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate Now
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
