import React, { useState } from "react";
import {
  BiSolidDashboard,
  BiBriefcase,
  BiSolidUser,
  BiCog,
  BiLock,
  BiLogOut,
} from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Initially, no item is selected
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const listItems = [
    { name: "Dashboard", icon: <BiSolidDashboard size={24} />, path:"/app/dashboard" },
    { name: "My Portfolio", icon: <BiBriefcase size={24} />,path:"/app/portfolio" },
    { name: "Assets", icon: <FaMoneyBill size={24} />, path:"/app/assets" },
    { name: "Analytics", icon: <MdAnalytics size={24}/> ,path:"/app/analytics" },
    { name: "Logout", icon: <BiLogOut size={24} />, path:"/logout" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuButtonClick = () => {
    toggleSidebar();
  };

  const handleListItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <aside className="h-screen fixed">
      <div
        className={`shadow-md bg-darkPurple flex flex-col px-5 py-20 justify-between font-Poppins ${
          isSidebarOpen ? "" : "collapsed-sidebar"
        }`}
      >
        <div className="flex items-center font-extrabold text-4xl ml-1 text-white">
          <button className="menu-button " onClick={handleMenuButtonClick}>
            {isSidebarOpen ? (
              <span className="icon">&#9776;</span>
            ) : (
              <span className="icon mx-auto">&#10006;</span>
            )}
          </button>
          <p
            className={`ml-3 ${isSidebarOpen ? "" : "w-0 overflow-hidden"}`}
            onClick={() => {
              if (isSidebarOpen) {
                toggleSidebar();
              }
            }}
          >
            {isSidebarOpen ? "Portfolio" : ""}
          </p>
        </div>
        <div className="py-12 font-Poppins">
          <ul className="">
            {listItems.map((item) => (
              
              <li
                key={item.name}
                className={`cursor-pointer text-center my-5 px-3 text-lg flex items-center ${
                  isSidebarOpen && selectedItem === item.name
                    ? "bg-white text-darkPurple rounded-lg "
                    : "text-white"
                }`}
                onClick={() => {
                  handleListItemClick(item.name);
                }}
              >
                <Link to= {item.path}>
                {isSidebarOpen ? (
                  <div className="icon-container flex my-2 ">
                    {item.icon}
                    <span className="ml-4 font-medium text-lg">{item.name}</span>
                  </div>
                ) : (
                  <div className="icon-container mx-auto my-2">{item.icon}</div>
                )}
              </Link>
              </li>
              
            ))}
          </ul>
        </div>
        {isSidebarOpen ? (
          <div className="flex items-center gap-3 w-[200px] text-white">
            <div className="w-8 h-8 rounded-full bg-slate-600">
              <UserButton/>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl">Kunal Shah</p>
              <p className="font-medium text-lg">Investor</p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-600" />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;