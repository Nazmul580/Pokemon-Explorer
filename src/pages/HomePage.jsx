import React from "react";
import { useApiContext } from "../context/ApiContext";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { state } = useApiContext();
  const { isLoading, error, filterData, data, currentPage, itemsPerPage } =
    state;

  const types = data.map((pokemon) => {
    return pokemon.types.map((t) => t.type.name);
  });

  const uniqueTypes = ["All", ...new Set(types.flat())];

  return (
    <div className="">
      <div className="container mx-auto py-5">
        <div className="sm:hidden">
          <SearchBar />
        </div>
        <div>
          {uniqueTypes.length > 1 && <Category uniqueTypes={uniqueTypes} />}
        </div>
        <div>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}

          {!isLoading && filterData.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filterData
                .slice(
                  itemsPerPage * currentPage - itemsPerPage,
                  itemsPerPage * currentPage
                )
                .map((pokemon) => {
                  return <Cart key={pokemon.id} pokemon={pokemon} />;
                })}
            </div>
          )}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
