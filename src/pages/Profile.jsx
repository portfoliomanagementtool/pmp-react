import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

const Profile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div class="px-4 py-6">
      <form action="#">
        <div class="form-container vertical">
          <div>
            <h5>General</h5>
            <p>
              Basic info, like your name and address that will displayed in
              public
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 border-b border-gray-200 dark:border-gray-600 items-center">
            <div class="font-semibold">Name</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <span class="input-wrapper undefined">
                    <div class="input-suffix-start">
                      <CgProfile className="text-lg ml-3" />
                    </div>
                    <input
                      class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.25rem]"
                      type="text"
                      name="name"
                      autocomplete="off"
                      placeholder="Name"
                      value="Mahek Jain"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 border-b border-gray-200 dark:border-gray-600 items-center">
            <div class="font-semibold">Email</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <span class="input-wrapper undefined">
                    <div class="input-suffix-start">
                      <CiMail className="text-lg ml-3" />
                    </div>
                    <input
                      class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.25rem]"
                      type="email"
                      name="email"
                      autocomplete="off"
                      placeholder="Email"
                      value="mahekjain@gmail.com"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 border-b border-gray-200 dark:border-gray-600 items-center">
            <div class="font-semibold">Avatar</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <div class="upload cursor-pointer">
                    <input class="upload-input" type="file" title="" value="" />
                    <span
                      class="avatar w-16 h-16 avatar-circle border-2 border-white dark:border-gray-800 shadow-lg text-3xl"
                      //   style="width: 60px; height: 60px; min-width: 60px; line-height: 60px; font-size: 30px;"
                    >
                      <img
                        class="avatar-img avatar-circle"
                        src="/img/avatars/thumb-3.jpg"
                        loading="lazy"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 items-center">
            <div class="font-semibold">Title</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <span class="input-wrapper undefined">
                    <div class="input-suffix-start">
                      <GoBriefcase className="text-lg ml-3" />
                    </div>
                    <input
                      class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.25rem]"
                      type="text"
                      name="title"
                      autocomplete="off"
                      placeholder="Title"
                      value="UI/UX Designer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <h5>Preferences</h5>
            <p>Your personalized preference displayed in your account</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 border-b border-gray-200 dark:border-gray-600 items-center">
            <div class="font-semibold">Language</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <div class="select select-md css-b62m3t-container">
                    <span
                      id="react-select-12-live-region"
                      class="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      class="css-7pg0cj-a11yText"
                    ></span>
                    <div class="select__control css-15bhs5i-control">
                      <span class="avatar avatar-circle ltr:ml-4 rtl:mr-4 w-5 h-5 text-lg">
                        <img
                          class="avatar-img avatar-circle"
                          src="/img/countries/us.png"
                          loading="lazy"
                        />
                      </span>
                      <div class="select__value-container select__value-container--has-value css-hlgwow">
                        <div class="select__single-value css-yr46hd-singleValue">
                          English (US)
                        </div>
                        <div
                          class="select__input-container css-136ehom"
                          data-value=""
                        >
                          <input
                            class="select__input"
                            autocapitalize="none"
                            autocomplete="off"
                            autocorrect="off"
                            id="react-select-12-input"
                            spellcheck="false"
                            tabindex="0"
                            type="text"
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            // style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"
                          />
                        </div>
                      </div>
                      <div class="select__indicators css-1wy0on6">
                        <div class="select-dropdown-indicator">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="lang" type="hidden" value="en" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 border-b border-gray-200 dark:border-gray-600 items-center">
            <div class="font-semibold">Time Zone</div>
            <div class="col-span-2">
              <div class="form-item vertical mb-0 max-w-[700px]">
                <label class="form-label"></label>
                <div class="">
                  <span class="input-wrapper undefined">
                    <div class="input-suffix-start">
                      <CiGlobe className="text-lg ml-3" />
                    </div>
                    <input
                      class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[2.25rem]"
                      type="text"
                      name="timeZone"
                      readonly=""
                      autocomplete="off"
                      placeholder="Time Zone"
                      value="GMT+8"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 gap-4 py-8 items-center">
            <div class="font-semibold">Sync Data</div>
            <div className="col-span-2">
              <div className="form-item vertical mb-0 max-w-[700px]">
                <label className="form-label"></label>
                <div className="">
                  <label className="switcher relative">
                    <input
                      type="checkbox"
                      name="syncData"
                      value="false"
                      className="hidden"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div
                      className={`switcher-toggle w-8 h-4 rounded-full shadow-inner bg-${
                        isChecked ? "white" : "gray-400"
                      } absolute inset-0 transition-transform duration-300 ease-in-out`}
                    ></div>
                    <span
                      className={`switcher-content block h-4 w-4 rounded-full bg-white border-2 border-gray-200 absolute left-0 top-0 transform translate-x-${
                        isChecked ? "4" : "0"
                      } transition-transform duration-300 ease-in-out`}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 ltr:text-right">
            <button
              class="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-11 px-8 py-2 ltr:mr-2 rtl:ml-2"
              type="button"
            >
              Reset
            </button>
            <button
              class="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-11 px-8 py-2"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
