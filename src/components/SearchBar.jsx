import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useApiContext } from "../context/ApiContext";

const SearchBar = () => {
  const { dispatch } = useApiContext();

  return (
    <div>
      <div className="border-pink-200 border-2 px-2 py-1 rounded-xl flex items-center">
        <input
          type="text"
          placeholder="Search here....."
          autoComplete="off"
          onChange={(e) => {
            dispatch({
              type: "FILTER_DATA_BY_SEARCH",
              payload: e.target.value,
            });
          }}
          className="text-sm outline-none w-full"
        />
        <button>
          <IoMdSearch className="text-pink-400 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
