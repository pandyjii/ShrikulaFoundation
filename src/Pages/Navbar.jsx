import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu
import logo from "../assets/logo.png";
import srikulalogo from "../assets/srikulalogo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <nav className="bg-black font-inter text-white px-8">
      {/* Navbar Container */}
      <div  className=" flex-col pb-3">
      <div className="w-[90vw] sm:w-[80vw] overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm text-[#BA451C] md:text-base text-center px-4  font-inter font-semibold" style={{ animationDuration: '20s' }}>
          This Site is  Undermaintenance
          </div>
        </div>
      <div className="flex items-center justify-between  sm:justify-around ">
        {/* Logo Section */}
        <Link to ={'/'} className="flex items-center">
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="h-14 w-14 rounded-full"
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
            to=""
            className={({ isActive }) =>
              isActive
                ? " border-b-0 border-white"
                : " hover:scale-110"
            }
          >
            Gallery
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
       
        </div>

        {/* Register Button (Desktop) */}
        <div className="hidden lg:block">
        

        {/* Logo */}
        <div className="w-14 h-14 rounded-full flex justify-center items-center mx-auto  bg-white shadow-md">
            <a target="_blank" href="https://srikula.org/"> <img src={srikulalogo} alt="logo" className="w-full h-full cursor-pointer" /></a> 
            </div>
        </div>
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
          <div className="w-10 h-10 mx-auto mb-4 bg-white shadow-md">
              <img src={srikulalogo} alt="logo" className="w-full h-full" />
            </div>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
