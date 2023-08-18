import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between my-16 mx-24 items-center">
      <h1 className="text-[#263238] text-[40px] font-semibold">Portfolio</h1>
      <div>
        <ul className="flex gap-10  ">
          <li className="text-[18px] text-[#263238]">Home</li>
          <li className="text-[18px] text-[#263238]">About</li>
          <li className="text-[18px] text-[#263238]">Features</li>
          <li className="text-[18px] text-[#263238]">How it works</li>
        </ul>
      </div>
      <div className="flex gap-5">
       <button className="w-[142px] h-[64px] border-black border-2 rounded-lg" onClick={() => navigate('/sign-in')}>Sign in</button>
       <button className="bg-[#473A6C] w-[142px] h-[64px] border-[#473A6C] rounded-lg border-2 text-white">Get Started</button>

      </div>
    </div>
  );
};

export default Navbar;
