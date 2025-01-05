import { useApiContext } from "../context/ApiContext";
import Cart from "../components/Cart";

const FavouritPage = () => {
  const { state } = useApiContext();
  const { favouritePokemon } = state;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {favouritePokemon.length > 0 ? (
            favouritePokemon.map((pokemon) => {
              return <Cart key={pokemon.id} pokemon={pokemon} />;
            })
          ) : (
            <h2 className="text-center text-xl capitalize font-semibold text-pink-300">
              no fovourite pokemon found...!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouritPage;
