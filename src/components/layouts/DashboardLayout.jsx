import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { setMode } from "../../state/slices/configSlice";
import Modal from "react-modal";
import SideNav from "./SideNav";
import Header from "./Header";
import View from "./View";
import { MdClose } from "react-icons/md";

const DashboardLayout = () => {
  const { user } = useUser();
  const mode = useSelector((state) => state.config.mode);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const html = document.querySelector('html');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (mode === "dark") {
      setIsChecked(true);
    } else if (mode === "light") {
      setIsChecked(false);
    }
  }, [mode]);

  const onToggle = (e) => {
    e.preventDefault();

    let changedMode = mode === 'light' ? 'dark' : 'light';
    dispatch(setMode(changedMode));

    if(changedMode === 'dark') {
      html.classList.add('dark');
    } else if (changedMode === 'light') {
      html.classList.remove('dark');
    }
  };

  return (
    <>
      {user && (
        <>
          <main>
            <div className="flex flex-auto flex-col">
              <div className="flex flex-auto min-w-0">
                <SideNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                  <Header
                    className="shadow dark:shadow-2xl"
                    openModal={openModal}
                  />
                  <div className="h-full flex flex-auto flex-col justify-between">
                    <View />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Modal
            className={{
              base: "drawer",
              afterOpen: "drawer-after-open",
              beforeClose: "drawer-before-close",
            }}
            overlayClassName={{
              base: "drawer-overlay",
              afterOpen: "drawer-overlay-after-open",
              beforeClose: "drawer-overlay-before-close",
            }}
            portalClassName={"drawer-portal"}
            bodyOpenClassName={"drawer-open"}
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Theme Config"
          >
            <div
              className="drawer-content vertical"
              style={{ width: "375px", right: "0px" }}
            >
              <div className="drawer-header">
                <h4>Theme Config</h4>
                <span className="close-btn">
                  <MdClose onClick={closeModal} />
                </span>
              </div>
              <div className="drawer-body">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-y-10 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h6>Dark Mode</h6>
                        <span>Switch theme to dark mode</span>
                      </div>
                      <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input onChange={onToggle} type="checkbox" value="" checked={isChecked} className="sr-only peer" />
                          {/* <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
