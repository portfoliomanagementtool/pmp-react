import React, { useState } from "react";
import {
  BiSolidDashboard,
  BiBriefcase,
  BiSolidUser,
  BiCog,
  BiLock,
  BiMoon,
} from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const listItems = [
    { name: "Dashboard", icon: <BiSolidDashboard /> },
    { name: "Analytics", icon: <MdAnalytics /> },
    { name: "My Portfolio", icon: <BiBriefcase /> },
    { name: "Accounts", icon: <BiSolidUser /> },
    { name: "Settings", icon: <BiCog /> },
    { name: "Security", icon: <BiLock /> },
    { name: "Dark Mode", icon: <BiMoon /> },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="h-screen w-auto bg-[#DBDFE0] flex flex-col fixed px-10 py-20 justify-between">
      <div>
        <p className="font-extrabold text-5xl text-darkPurple">Portfolio</p>
      </div>
      <div className="flex-grow py-10">
        <ul>
          {listItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer text-center my-4 text-lg flex items-center ${
                selectedItem === item.name
                  ? "bg-darkPurple text-white rounded-lg py-2 px-2"
                  : "text-darkPurple"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-600" />
        <div className="flex flex-col">
          <p className="font-bold text-xl">Kunal Shah</p>
          <p className="font-medium text-lg">Investor</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

