import React, { useState } from "react";
import { useApiContext } from "../context/ApiContext";

const Category = ({ uniqueTypes }) => {
  const { dispatch } = useApiContext();
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <ul className="flex space-x-5 justify-evenly items-center py-5 mb-5 gap-2  flex-wrap">
        {uniqueTypes.map((type, index) => {
          return (
            <li key={index}>
              <button
                value={type}
                onClick={(e) => {
                  dispatch({
                    type: "FILTER_DATA_BY_CATEGORY",
                    payload: e.target.value,
                  });
                  setActiveCategory(type);
                }}
                className={
                  activeCategory === type
                    ? "cursor-pointer text-sm font-semibold capitalize bg-pink-400 rounded-xl w-20 h-10 flex justify-center items-center"
                    : "cursor-pointer text-sm font-semibold capitalize bg-pink-100 rounded-xl w-20 h-10 flex justify-center items-center"
                }
              >
                {type}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Category;
