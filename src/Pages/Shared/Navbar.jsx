import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainButton from "../../Components/MainButton";

// Navbar component to handle site navigation
const Navbar = () => {
  const location = useLocation(); // Hook to access current route
  const [active, setActive] = useState(location.pathname); // Track active route for styling

  // Update active path when a nav item is clicked
  const handleActive = (path) => {
    setActive(path);
  };

  // Navigation items with labels and route paths
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Pages", path: "" },
    { label: "Menu", path: "" },
    { label: "Order", path: "" },
    { label: "Blog", path: "" },
    { label: "Contact", path: "" },
    { label: "Shop", path: "" },
  ];

  // Rendered nav items with active class and underline indicator
  const navOptions = (
    <>
      {navItems.map((item, index) => (
        <li key={index} onClick={() => handleActive(item.path)}>
          <Link
            to={item.path}
            className={`relative transition-all duration-300 ${
              active === item.path ? "text-white" : ""
            }`}
          >
            {item.label}
            {/* Underline for active item */}
            {active === item.path && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--color-primary)]"></span>
            )}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="absolute top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-28">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0} role="button"
              className=" btn btn-circle swap swap-rotate"
            >
         
                {/* this hidden checkbox controls the state */}
                <input  type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
             
            </label>

            <ul tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-0 w-52 p-2 shadow bg-base-200 h-screen"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-2xl font-bold">
            <span className="bg-[var(--color-primary)] px-1 rounded-sm">F</span>
            OODI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <MainButton text="RESERVATION" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
