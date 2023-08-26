import React, { useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
      <div className="flex gap-10">
      <h1 className="text-[#263238] text-xl md:text-3xl font-semibold mb-2 md:mb-0">
        Portfolio
      </h1>
      <div className="md:hidden">
        <button
          className="text-xl md:text-2xl text-[#263238] cursor-pointer"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      </div>
      <div className={`hidden md:flex flex-grow justify-center`}>
        <ul className="flex gap-4 items-center">
          <li className="text-lg md:text-xl text-[#263238]">Home</li>
          <li className="text-lg md:text-xl text-[#263238]">About</li>
          <li className="text-lg md:text-xl text-[#263238]">Features</li>
          <li className="text-lg md:text-xl text-[#263238]">How it works</li>
        </ul>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li className="text-lg md:text-xl text-[#263238]">Home</li>
            <li className="text-lg md:text-xl text-[#263238]">About</li>
            <li className="text-lg md:text-xl text-[#263238]">Features</li>
            <li className="text-lg md:text-xl text-[#263238]">How it works</li>
          </ul>
        </div>
      )}
      <div className="flex gap-4 md:gap-5 mt-4 md:mt-0">
        <button
          className="border-black px-4 py-2 border-2 rounded-lg"
          onClick={() => navigate("/sign-in")}
        >
          Sign in
        </button>
        <button className="bg-[#473A6C] px-4 py-2 border-[#473A6C] rounded-lg border-2 text-white">
          Get Started
        </button>
      </div>
      {/* This section will be visible on mobile screens */}
      
    </div>
  );
};

export default Navbar;
