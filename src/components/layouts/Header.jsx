import React, { useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../state/slices/configSlice';

const Header = () => {
  const mode = useSelector((state) => state.config.mode);
  const dispatch = useDispatch();
  const { user } = useUser();
  const Collapsed = false;
  const [isChecked, setIsChecked] = React.useState(false);

  useEffect(() => {
    if(mode === 'dark') {
      setIsChecked(true);
    } else if (mode === 'light') {
      setIsChecked(false);
    }
  }, [mode]);

  const onToggle = () => {
    let changedMode = mode === 'light' ? 'dark' : 'light';
    dispatch(setMode(changedMode));
    
    if(changedMode === 'dark') {
      const html = document.querySelector('html');
      html.classList.add('dark');
    } else if (changedMode === 'light') {
      const html = document.querySelector('html');
      html.classList.remove('dark');
    }
  }

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
          {/* <div onClick={onToggle} className={`toggle${mode ? " night" : "light"}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
          </div> */}
          <label class="relative inline-flex items-center cursor-pointer">
            <input onChange={onToggle} type="checkbox" value="" checked={isChecked} class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
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