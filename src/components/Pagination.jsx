import React, { useState } from "react";
import { useApiContext } from "../context/ApiContext";

const Pagination = () => {
  const { state, dispatch } = useApiContext();
  const { data, itemsPerPage } = state;
  let totalPages = [...Array(Math.ceil(data?.length / itemsPerPage))];

  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      <div className="flex justify-center my-5">
        <ul className="flex space-x-3">
          <li className="cursor-pointer px-3 py-1 text-sm font-semibold bg-pink-400 rounded">
            prev
          </li>
          {totalPages.map((_, index) => (
            <li
              key={index}
              value={index + 1}
              onClick={(e) => {
                dispatch({ type: "SET_CURRENT_PAGE", payload: e.target.value });
                setActivePage(index + 1);
              }}
              className={
                activePage === index + 1
                  ? "cursor-pointer px-3 py-1 text-sm font-semibold shadow rounded border-pink-400 border-2"
                  : "cursor-pointer px-3 py-1 text-sm font-semibold shadow rounded"
              }
            >
              {index + 1}
            </li>
          ))}
          <li className="cursor-pointer px-3 py-1 text-sm font-semibold bg-pink-400 rounded">
            next
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
