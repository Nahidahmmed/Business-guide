"use client";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [dropDownState, setDropDownState] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <nav className="w-full">
      <div className="bg-white px-4 py-2 bg-opacity-90">
        <div className="max-w-screen-[1440px] mx-auto flex items-center justify-start">
          <div className="scale-100 cursor-pointer rounded-2xl md:px-3 py-2  transition-all duration-200 hover:scale-110"></div>
          <ul className="hidden text-base font-medium items-center gap-10 md:flex mx-auto">
            <li className="group flex  cursor-pointer flex-col">
              About
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Services
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Whats's new?
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
          </ul>

          <button className="font-semibold pb-2 pt-1 xl:px-6 lg:px-6 md:px-6 px-5 rounded-lg md;text-3xl text-xl">
            Business Guide
          </button>
          <ul className="hidden text-base font-medium items-center justify-between gap-10 md:flex mx-auto">
            <li className="group flex  cursor-pointer flex-col">
              Comminity
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              blog
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full mx-auto"></span>
            </li>
            <li className="">
              <button
                onClick={() => setOpenModal(true)}
                className="p-2 bg-[#5742AC] text-white rounded-md hover:bg-[#4c3996] mr-auto"
              >
                Contact Us
              </button>
            </li>
          </ul>
          <button
            onClick={() => setOpenModal(true)}
            className="px-2 py-1 bg-[#5742AC] text-white rounded-md hover:bg-[#4c3996] ml-auto md:hidden flex"
          >
            Contact Us
          </button>
          <div
            onClick={() => setOpenModal(false)}
            className={`fixed flex justify-center items-center z-[100] ${
              openModal ? "visible opacity-1" : "invisible opacity-0"
            } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
          >
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                openModal
                  ? "opacity-1 duration-300 translate-y-0"
                  : "-translate-y-20 opacity-0 duration-150"
              }`}
            >
              <form className="p-12">
                <svg
                  onClick={() => setOpenModal(false)}
                  className="w-10 mx-auto mr-0 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
                <h1 className="backdrop-blur-sm text-4xl pb-8">Login</h1>
                
                {/* button type will be submit for handling form submission*/}
                
              </form>
            </div>
          </div>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="22" y1="12" y2="12" />{" "}
              <line x1="4" x2="22" y1="6" y2="6" />
              <line x1="4" x2="22" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10 gap-2 bg-white shadow-lg absolute -right-3 top-14 flex w-[200px] flex-col rounded-lg text-base ">
                <li className="cursor-pointer  px-6 py-2  rounded-t-lg hover:bg-sky-600 ">
                  About
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  Services
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  What's new?
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  Comminity
                </li>
                <li className="cursor-pointer  px-6 py-2  hover:bg-sky-600 ">
                  Blog
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
