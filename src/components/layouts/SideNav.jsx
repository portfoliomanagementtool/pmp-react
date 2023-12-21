import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MdKeyboardArrowDown } from "react-icons/md";
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

const SideNav = () => {
  const navigate = useNavigate();
  const menu = [{
    menuTitle: "Pages",
    menuCollapsableItems: [{
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      path: "/app/dashboard",
      dropDown: false,
      // subMenu: [{ name: "Dashboard", path: "/app/dashboard" }]
    }, {
      name: "My Portfolio",
      icon: <BiBriefcase />,
      path: "/app/portfolio",
      dropDown: false,
    }, {
      name: "Assets",
      icon: <FaMoneyBill />,
      path: "/app/assets",
      dropDown: false,
    }, {
      name: "Analytics",
      icon: <MdAnalytics />,
      path: "/app/analytics",
      dropDown: false,
    }]
  }, {
    menuTitle: "Account",
    menuCollapsableItems: [{
      name: "Profile",
      icon: <BiSolidUser />,
      path: "/app/profile",
      dropDown: false,
    }, {
      name: "Settings",
      icon: <BiCog />,
      path: "/app/settings",
      dropDown: false,
    }, {
      name: "Change Password",
      icon: <BiLock />,
      path: "/app/change-password",
      dropDown: false,
    }, {
      name: "Logout",
      icon: <BiLogOut />,
      path: "/app/logout",
      dropDown: false,
    }]
  
  }];

  return (
    <div 
      className="side-nav side-nav-transparent side-nav-expand"
      style={{ width: "290px", minWidth: "290px" }}
    >
      <div className='side-nav-header'>
        <h1 className="logo px-6 py-2 font-bold text-[#022352]">
          Portfolio
        </h1>
      </div>
      <div className='side-nav-content'>
        <Scrollbars autoHide>
          <nav className='menu menu-transparent px-4 pb-4'>
              {
                menu.map((item, index) => {
                  return(
                    <div className="menu-group" key={index}>
                      <div className="menu-title menu-title-transparent">{item.menuTitle}</div>
                      <ul>
                        {item.menuCollapsableItems.map((item, index) => {
                          return(
                            <div 
                              key={index}
                              className="menu-collapse"
                              onClick={() => { 
                                if(!item.dropDown) {
                                  navigate(item.path);
                                }
                              }}
                            >
                              <div className="menu-collapse-item menu-collapse-item-transparent mb-2">
                                <span className='flex items-center'>
                                  <span className='text-2xl mr-2'>{item.icon}</span>
                                  <span>{item.name}</span>
                                </span>
                                {item.dropDown && <span className='text-lg mt-1' style={{ transform: "rotate(0deg)" }}><MdKeyboardArrowDown /></span>}
                              </div>
                              {item.subMenu && <ul className='ml-5' style={{ opacity: "0", height: "0px", overflow: "hidden" }}>
                                {item.subMenu.map((item, index) => {
                                  return(
                                    <div key={index} className="menu-item menu-item-transparent menu-item-hoverable" style={{ height: "40px" }}>
                                      <Link to={item.path} className="h-full w-full flex items-center">
                                        <span>{item.name}</span>
                                      </Link>
                                    </div>
                                  )
                                })}
                              </ul>}
                            </div>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })
              }
          </nav>
        </Scrollbars>
      </div>
    </div>
  )
}

export default SideNav;