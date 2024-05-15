import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBer = () => {
  const navitems = (
    <>
      <NavLink>
        {" "}
        <li className="group flex  cursor-pointer flex-col">
          Home
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li className="group flex  cursor-pointer flex-col">
          CONTACT US
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li className="group flex  cursor-pointer flex-col">
          DASHBOARD
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink>
        {" "}
        <li className="group flex  cursor-pointer flex-col uppercase">
          Our Menu
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink>
        <li className="group flex  cursor-pointer flex-col uppercase">
          <div className="flex items-center gap-2">
            Our Shop
            <div className="indicator ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>{" "}
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
    </>
  );

  const [dropDownState, setDropDownState] = useState(false);
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
    <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white mb-24">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>
          BISTRO BOSS <br /> <span>Restaurant</span>
        </h2>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        {navitems}
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
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
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2 p-5  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">

{navitems}



          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBer;
