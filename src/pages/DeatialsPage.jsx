import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeatialsPage = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemon = async () => {
    try {
      setError("");
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Pokémon not found!");
      }
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setPokemon(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl">Pokémon Details</h1>
          <div className="w-28 h-[2px] bg-pink-400 rounded-full"></div>
        </div>
        {error && <p>{error}</p>}
        {pokemon && (
          <div className="grid grid-rows-1 sm:grid-cols-2  gap-5 mt-5">
            <div className=" flex justify-center bg-pink-50 pokemon-border-radius shadow-lg mr-5">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="py-10"
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <div className="flex space-x-2">
                <strong>Name :</strong>
                <h2 className="text-xl font-semibold capitalize">
                  {pokemon.name}
                </h2>
              </div>
              <div className="flex space-x-1">
                <strong>Type :</strong>
                <ul className="flex space-x-2">
                  {pokemon.types.map((type) => (
                    <li
                      key={type.type.name}
                      className="list-none px-2 py-1 text-sm font-semibold bg-pink-200 rounded capitalize"
                    >
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-1">
                <strong>Abilities:</strong>
                <ul className="flex space-x-2">
                  {pokemon.abilities.map((ability) => (
                    <li
                      key={ability.ability.name}
                      className="list-none px-2 py-1 text-sm font-semibold bg-pink-200 rounded capitalize"
                    >
                      {ability.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>
                  <strong>Stats:</strong>
                </p>
                <ul className="w-full mt-3 ">
                  {pokemon.stats.map((stat) => {
                    return (
                      <div
                        key={stat.stat.name}
                        className="py-2 flex justify-between px-5 shadow hover:shadow-lg transition rounded"
                      >
                        <span className="text-sm font-semibold capitalize">
                          {stat.stat.name}
                        </span>
                        <span className="text-sm font-semibold capitalize text-pink-400">
                          {stat.base_stat}
                        </span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeatialsPage;
