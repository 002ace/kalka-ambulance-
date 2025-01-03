



"use client";
import React, { useState } from "react";
import connectlogo from "../image/connectlogo.png";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-6 py-4 bg-[#F9FAFB]">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={connectlogo}
          alt="Logo"
          width={120} // Adjusted for responsiveness
          height={30}
          className="mr-4 sm:mr-8 ml-2 sm:ml-4 object-contain"
        />
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center gap-4">
        {/* Book Now Button (Mobile) */}
        <button className="bg-[#121E52] text-white px-3 sm:px-6 py-2  rounded-full font-medium hover:bg-[#0F172A] shadow-lg mt-2 sm:mt-5 whitespace-nowrap">
          Book now
        </button>

        {/* Hamburger Icon */}
        <div className="flex items-center h-[37px]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#121E52] focus:outline-none h-full flex items-center mt-2 sm:mt-5"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-20 left-0 w-full md:w-auto bg-[#F9FAFB] md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row md:flex items-center ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-12 items-center font-poppins text-[#2B3765] px-4 py-4 md:p-0">
          <li className="py-2 md:py-0 text-[16px] sm:text-[18px] font-medium leading-[26.1px] text-left hover:underline cursor-pointer">
            Ambulance
          </li>
          <li className="py-2 md:py-0 text-[16px] sm:text-[18px] font-medium leading-[26.1px] text-left hover:underline cursor-pointer">
            Join us
          </li>
          <li className="py-2 md:py-0 text-[16px] sm:text-[18px] font-medium leading-[26.1px] text-left hover:underline cursor-pointer">
            Contact us
          </li>
          <li className="py-2 md:py-0 text-[16px] sm:text-[18px] font-medium leading-[26.1px] text-left hover:underline cursor-pointer">
            About us
          </li>

          {/* Book Now Button (Desktop) */}
          <button className="hidden md:block bg-[#121E52] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0F172A] whitespace-nowrap">
            Book now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
