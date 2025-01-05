import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="py-5 border-pink-50 border-b-2 sticky top-0 bg-white z-10">
      <div className="flex justify-between items-center container mx-auto px-5 sm:px-0">
        <NavLink to={"/"} className="text-lg font-bold text-pink-400">
          Pokemon Explorer
        </NavLink>
        <ul className="flex items-center space-x-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `text-sm font-semibold text-pink-400 hover:text-pink-400 transition`
                    : `text-sm font-semibold text-gray-600 hover:text-pink-400 transition`
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Favourit"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `text-sm font-semibold text-pink-400 hover:text-pink-400 transition`
                    : `text-sm font-semibold text-gray-600 hover:text-pink-400 transition`
                }`
              }
            >
              Fovourit
            </NavLink>
          </li>
        </ul>
        <div className="hidden sm:block">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
