import React, { useState, useEffect, useRef } from 'react';
import { useUser, useClerk } from "@clerk/clerk-react";
import { useDispatch, useSelector } from 'react-redux';
import { setMode, toggleCollapsed } from '../../state/slices/configSlice';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt2, HiOutlineBell, HiOutlineUser, HiOutlineMailOpen } from "react-icons/hi";
import { IoSearchSharp, IoLogOutOutline } from "react-icons/io5";
import { FiSettings, FiActivity } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Scrollbars from 'react-custom-scrollbars-2';
import { Tooltip } from 'react-tooltip';
import { setDefaultEditAsset } from '../../state/slices/assetSlice';

const Header = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();
  const { mode, collapsed } = useSelector((state) => state.config);
  const [userDropdown, showUserDropdown] = useState(false);
  const [notifyDropdown, showNotifyDropdown] = useState(false);
  const userRef = useRef(null);
  const notifyRef = useRef(null);
  const [isAllRead, setIsAllRead] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id:'1',
      imageUrl: user.imageUrl,
      fullName: user.fullName,
      message: 'invited you to new project.',
      time: '4 minutes',
      read: false,
    },{
      id:'2',
      imageUrl: user.imageUrl,
      fullName: user.fullName,
      message: 'invited you to new project.',
      time: '4 minutes',
      read: true,
    },{
      id:'3',
      imageUrl: user.imageUrl,
      fullName: user.fullName,
      message: 'invited you to new project.',
      time: '4 minutes',
      read: false,
    },{
      id:'4',
      imageUrl: user.imageUrl,
      fullName: user.fullName,
      message: 'invited you to new project.',
      time: '4 minutes',
      read: false,
    },{
      id:'5',
      imageUrl: user.imageUrl,
      fullName: user.fullName,
      message: 'invited you to new project.',
      time: '4 minutes',
      read: false,
    }
  ]);

  useEffect(() => {
    setIsAllRead(notifications.every((notification) => notification.read === true));
  }, [notifications]);

  const updateNotifcation = (id, read) => {
    if (read) {
      return;
    }

    setNotifications(notifications.map((notification) => {
      if(notification.id === id) {
        notification.read = true;
      }
      return notification;
    }));
  }

  const markAllAsRead = () => {
    if(!isAllRead) {
      setNotifications(notifications.map((notification) => {
        notification.read = true;
        return notification;
      }));
    }
  }

  const handleClickOutside = (event) => {
    event.preventDefault();

    if(userRef.current && !userRef.current.contains(event.target)) {
      showUserDropdown(false);
    }

    if(notifyRef.current && !notifyRef.current.contains(event.target)) {
      showNotifyDropdown(false);
    }
  }

  useEffect(() => {
    if (userDropdown || notifyDropdown) {
      document.addEventListener('click', handleClickOutside);

      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [userDropdown, notifyDropdown]);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch(setMode('light'));
      dispatch(setDefaultEditAsset());
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <header className='header border-b border-gray-200 dark:border-gray-700'>
      <div className="header-wrapper h-16">
        <div className="header-action header-action-start">
          <div onClick={() => { dispatch(toggleCollapsed(!collapsed)) }} className="cursor-pointer header-action-item header-action-item-hoverable text-2xl">
            {collapsed ? <RxHamburgerMenu /> : <HiOutlineMenuAlt2 />}
          </div>
          <div className="header-action-item header-action-item-hoverable text-2xl">
            <IoSearchSharp />
          </div>
        </div>
        <div className="header-action header-action-end">
          <div className="dropdown"></div>
          <div ref={notifyRef} className="dropdown">
            <div className="dropdown-toggle">
              <div onClick={() => showNotifyDropdown(!notifyDropdown)} className="header-action-item header-action-item-hoverable text-2xl">
                <span className="badge-wrapper">
                  {!isAllRead && <span className="badge-dot badge-inner" style={{ top: "0px", right: "3px" }}></span>}
                  <HiOutlineBell />
                </span>
              </div>
            </div>
            {notifyDropdown && (
              <ul className="dropdown-menu bottom-end p-0 min-w-[280px] md:min-w-[340px]" style={{ opacity: "1", visibility: "visible", transform: "rotateX(0deg)" }}>
                <li className="menu-item-header">
                  <div className="border-b border-gray-200 dark:border-gray-600 px-4 py-2 flex items-center justify-between">
                    <h6>Notifcations</h6>
                    <button onClick={markAllAsRead} id="mark-all-as-read" className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-9 w-9 inline-flex items-center justify-center text-lg">
                      <HiOutlineMailOpen size={20} />
                    </button>
                    <Tooltip
                      anchorSelect={"#mark-all-as-read"} 
                      wrapper="span"
                      className="tooltip !bg-gray-800 dark:!bg-black"
                      content="Mark all as read" 
                      place="top"
                      clickable
                    />
                  </div>
                </li>
                <div className="overflow-y-auto h-72">
                  <Scrollbars>
                    {notifications.map((notification, index) => {
                      return (
                        <div key={index} onClick={() => updateNotifcation(notification.id, notification.read)} className="relative flex px-4 py-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-black dark:hover:bg-opacity-20  border-b border-gray-200 dark:border-gray-600">
                          <div>
                            <span className="avatar avatar-circle avatar-md">
                              <img className="avatar-img avatar-circle" src={notification.imageUrl} alt={notification.fullName} loading='lazy' />
                            </span>
                          </div>
                          <div className="ml-3 rtl:mr-3">
                            <div>
                              <span className="font-semibold heading-text">{notification.fullName}</span>
                              <span> {notification.message}</span>
                            </div>
                            <span className="text-xs">{notification.time} ago</span>
                          </div>
                          <span className={`badge-dot ${notification.read === false ? "!bg-indigo-600" : "!bg-gray-300"} absolute top-4 right-4 rtl:left-4 mt-1.5`}></span>
                        </div>
                      )
                    })}
                  </Scrollbars>
                </div>
                <li className="menu-item-header">
                  <div className="flex justify-center border-t border-gray-200 dark:border-gray-600 px-4 py-2">
                    <Link to="/app/account/activity-log" className="font-semibold cursor-pointer p-2 px-3 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                      View All Activity
                    </Link>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div onClick={openModal} className="text-2xl header-action-item header-action-item-hoverable">
            <FiSettings />
          </div>
          <div>
          <div ref={userRef} className="dropdown">
              <div className="dropdown-toggle" onClick={() => showUserDropdown(!userDropdown)}>
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
              {userDropdown && (
                <ul className="dropdown-menu bottom-end" style={{ minWidth: "240px", opacity: "1", visibility: "visible", transform: "rotateX(0deg)" }}>
                  <li className="menu-item-header">
                    <div className="py-2 px-3 flex items-center gap-2">
                      <span className="avatar avatar-circle avatar-md">
                        <img className='avatar-img avatar-circle' src={user.imageUrl} alt={user.fullName} loading='lazy' />
                      </span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-gray-100">{user.fullName}</div>
                        <div className="text-xs">{user.primaryEmailAddress.emailAddress}</div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-divider"></li>
                  <li className={`menu-item menu-item-${mode} menu-item-hoverable mb-1 px-0`} style={{ height: "35px" }}>
                    <Link to='/app/account/settings/profile' className='flex h-full w-full px-2'>
                      <span className="flex gap-2 items-center w-full">
                        <span className="text-xl opacity-50">
                          <HiOutlineUser />
                        </span>
                        <span>Profile</span>
                      </span>
                    </Link>
                  </li>
                  <li className={`menu-item menu-item-${mode} menu-item-hoverable mb-1 px-0`} style={{ height: "35px" }}>
                    <Link to='/app/account/settings/profile' className='flex h-full w-full px-2'>
                      <span className="flex gap-2 items-center w-full">
                        <span className="text-xl opacity-50">
                          <FiSettings />
                        </span>
                        <span>Account Setting</span>
                      </span>
                    </Link>
                  </li>
                  <li className={`menu-item menu-item-${mode} menu-item-hoverable mb-1 px-0`} style={{ height: "35px" }}>
                    <Link to='/app/account/activity-log' className='flex h-full w-full px-2'>
                      <span className="flex gap-2 items-center w-full">
                        <span className="text-xl opacity-50">
                          <FiActivity />
                        </span>
                        <span>Activity Log</span>
                      </span>
                    </Link>
                  </li>
                  <li className="menu-item-divider"></li>
                  <li onClick={handleSignOut} className={`menu-item menu-item-${mode} menu-item-hoverable gap-2"`} style={{ height: "35px" }}>
                    <span className="text-xl opacity-50">
                      <IoLogOutOutline />
                    </span>
                    <span>Sign Out</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;