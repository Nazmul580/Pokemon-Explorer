import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useApiContext } from "../context/ApiContext";
const Cart = ({ pokemon }) => {
  const types = pokemon.types.map((t) => t.type.name);
  const { dispatch, state } = useApiContext();
  const { favouritePokemon } = state;
  const isFavorite = favouritePokemon.some(
    (favourite) => favourite.id === pokemon.id
  );

  const toggleFavourite = () => {
    isFavorite
      ? dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: pokemon })
      : dispatch({ type: "ADD_TO_FAVOURITE", payload: pokemon });
  };
  return (
    <>
      <div className=" shadow hover:shadow-lg transition rounded-md px-5 py-8 relative">
        <div className="flex space-x-5 pb-5">
          {types.map((type, index) => (
            <span
              key={index}
              className="text-sm bg-pink-100 rounded-lg px-2 py-1 text-gray-600 font-bold capitalize"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="flex justify-center bg-pink-50 pokemon-border-radius">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className=" w-20 py-5"
          />
        </div>
        <h2 className="capitalize font-semibold text-lg text-center py-5">
          {pokemon.name}
        </h2>
        <div className="text-center">
          <Link
            to={`/${pokemon.name}`}
            className="capitalize tex-lg font-semibold px-5 py-2 bg-pink-400 rounded-md"
          >
            veiw details
          </Link>
        </div>
        <div className="absolute top-8 right-5">
          <FaHeart
            onClick={toggleFavourite}
            className={
              isFavorite
                ? "text-pink-500 cursor-pointer text-lg"
                : "text-gray-300  cursor-pointer text-lg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
