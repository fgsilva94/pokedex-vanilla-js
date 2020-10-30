import { getElement, getStorageItem } from "./utils.js";
import displayPokemons from "./displayPokemons.js";

const form = getElement(".search-form");
const input = getElement('[name="pokemon"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;

  if (!value) {
    displayPokemons(getStorageItem("pokemons"));
    return;
  }

  const newPokemons = getStorageItem("pokemons").filter((item) => {
    if (item.name.includes(value)) {
      return item;
    }
  });

  displayPokemons(newPokemons);
});
