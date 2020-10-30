import displaySinglePokemon from "./src/displaySinglePokemon.js";
import { getStorageItem } from "./src/utils.js";

const presetPokemon = () => {
  const id = getStorageItem("pokemon");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const pokemonsList = getStorageItem("pokemons");
    const pokemon = pokemonsList.filter((item) => item.id === id);
    displaySinglePokemon(pokemon);
  }
};

window.addEventListener("DOMContentLoaded", presetPokemon);
