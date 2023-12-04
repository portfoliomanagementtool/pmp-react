import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  const Collapsed = false

  return (
    <header className='header border-b border-gray-200 dark:border-gray-700'>
      <div className="header-wrapper h-16">
        <div className="header-action header-action-start">
          <div className="header-action-item header-action-item-hoverable text-2xl">
            {Collapsed ? <RxHamburgerMenu /> : <HiOutlineMenuAlt2 />}
          </div>
          <div className="header-action-item header-action-item-hoverable text-2xl">
            <IoSearchSharp />
          </div>
        </div>
        <div className="header-action header-action-end">
          <div className="dropdown"></div>
          <div className="dropdown">
            <div className="dropdown-toggle">
              <div className="header-action-item header-action-item-hoverable text-2xl">
                <span className="badge-wrapper">
                  <span className="badge-dot badge-inner" style={{ top: "0px", right: "3px" }}></span>
                  <HiOutlineBell />
                </span>
              </div>
            </div>
          </div>
          <div className="text-2xl header-action-item header-action-item-hoverable">
            <FiSettings />
          </div>
          <div>
            <div className="dropdown">
              <div className="dropdown-toggle">
                <div className="header-action-item flex items-center gap-2">
                  <span className="avatar avatar-circle" style={{ width: "32px", height: "32px", minWidth: "32px", lineHeight: "32px", fontSize: "12px" }}>
                    <img className='avatar-img avatar-circle' src={user.imageUrl} alt={user.fullName} loading='lazy' />
                  </span>
                  <div className="hidden md:block">
                    <div className="text-xs capitalize">User</div>
                    <div className="font-bold">{user.fullName}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;