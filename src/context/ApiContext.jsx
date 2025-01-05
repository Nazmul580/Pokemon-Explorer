import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const ApiContext = createContext();

const initialState = {
  data: [],
  filterData: [],
  isLoading: false,
  error: null,
  itemsPerPage: 8,
  currentPage: 1,
  favouritePokemon: JSON.parse(localStorage.getItem("favourite_pokemon")) || [],
};

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPokemonData = async () => {
    dispatch({ type: "SET_LOADING_TRUE" });

    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const data = await response.json();
      const finalData = data.results.map(async (pokemon) => {
        const finalResponse = await fetch(pokemon.url);
        const pokemonData = await finalResponse.json();
        return pokemonData;
      });
      dispatch({ type: "SET_DATA", payload: await Promise.all(finalData) });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const value = {
    state,
    dispatch,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => {
  return useContext(ApiContext);
};

export default ApiProvider;
