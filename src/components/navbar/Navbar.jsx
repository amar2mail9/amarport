import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(null); // Track the hovered link index

  const [showMenu, setShowMenu] = useState(false);

  const menuList = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Skills", href: "/my-skills" },
    {
      name:"Projects",
      href:'/projects'
    },
    { name: "Download CV", href: "/download-cv" },
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 w-full">
      <nav className="py-3 w-10/12 mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to={"/"} className="cursor-pointer">
          <h3
            className="text-orange-500 text-3xl font-bold"
            style={{ fontFamily: "Sour Gummy", fontOpticalSizing: "auto" }}
          >
            AMAR
          </h3>
        </Link>

        {/* Menu Section */}
        <ul className="hidden gap-6 items-center font-semibold text-lg md:flex">
          {menuList.map((items, idx) => {
            const isActive = items.href === location.pathname;
            const isHovered = idx === activeIndex; // Track if the link is hovered

            return (
              <Link
                key={idx}
                className={`relative ${
                  isActive ? "text-emerald-500" : "text-orange-50"
                } 
                  hover:text-emerald-400 transition-all duration-300`}
                to={items.href}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <li>{items.name}</li>
                {/* Dynamic underline on hover */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full 
                    ${isHovered || isActive ? "bg-rose-50" : "w-0"}`}
                  style={{
                    transition: "width  0.3s ease",
                    width: isHovered || isActive ? "100%" : "0",
                  }}
                ></div>
              </Link>
            );
          })}
        </ul>

        <button
          className="text-orange-50 md:hidden block text-3xl duration-300"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {!showMenu ? (
            <RiMenu4Fill />
          ) : (
            <GiCrossMark className="text-green-500" />
          )}
        </button>
      </nav>

      {showMenu && (
        <div className="z-50 w-full duration-500 block md:hidden  bg-transparent fixed  ">
          <div className="flex  p-4  mx-auto  rounded-lg  shadow-lg mt-2 bg-gray-200 w-11/12 items-center justify-center flex-col">
            {menuList.map((items, indx) => {
              const isActive = location.pathname === items.href;
              return (
                <Link
                  to={items.href}
                  key={indx}
                  className={`w-full bg-orange-500 ${
                    isActive ? "bg-green-600" : null
                  } text-orange-50 rounded-xl my-1 py-1 text-center`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
