import { getStorageItem, setStorageItem } from "./utils.js";
import { fetchPokemons, getPokemonsData } from "./fetchPokemons.js";
import displayPokemons from "./displayPokemons.js";
import setPokemons from "./setPokemons.js";

let data = getStorageItem("pokemons");

const showPokemons = async (url) => {
  // fetch pokemons
  if (data.length === 0) {
    let pokemonsList = await fetchPokemons(url);
    pokemonsList = pokemonsList.results;
    data = await getPokemonsData(pokemonsList);
    setStorageItem("pokemons", data);
  }

  // display pokemons
  const section = await displayPokemons(data);
  if (section) {
    setPokemons(section);
  }
};

export { data, showPokemons };
