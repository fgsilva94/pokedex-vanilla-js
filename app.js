import { showPokemons } from "./src/presentPokemons.js";
import "./src/searchForm.js";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=893";

window.addEventListener("DOMContentLoaded", () => {
  showPokemons(URL);
});
/*
async function fetchPokemon(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const init = async () => {
  let pokemon = await fetchPokemon(URL);
  pokemon = pokemon.results;

  let pokemonData = await getData(pokemon);

  let pokemonDOM = pokemonData
    .map((item) => {
      console.log(item.abilities, item.types);
      return `
        <div>
        <div>
        <img src="${item.frontImg}" alt="front-img" />
        </div>
        <div>
      <img src="${item.backImg}" alt="back-img" />
      </div>
      <h1>Name: ${item.name}</h1>
      <h2>ID: ${item.id}</h2>
      <h2>Height: ${item.height}</h2>
      <h2>Weight: ${item.weight}</h2>
      <h2>Stats: ${item.stats
        .map((item) => `${item.stat.name}: ${item.base_stat}`)
        .join(", ")}</h2>
      <h2>Abilities: ${item.abilities
        .map((item) => `${item.ability.name}`)
        .join(", ")}</h2>
      <h2>Types: ${item.types
        .map((item) => `${item.type.name}`)
        .join(", ")}</h2>
    </div>`;
    })
    .join("");

  div.innerHTML = pokemonDOM;
};

function getData(pokemon) {
  let result = pokemon.map(async function (item) {
    const response = await fetch(item.url);
    const data = await response.json();

    const { id, abilities, name, stats, height, weight, sprites, types } = data;

    const { back_default: backImg, front_default: frontImg } = sprites;

    return {
      id,
      name,
      height,
      weight,
      stats,
      abilities,
      types,
      frontImg,
      backImg,
    };
  });

  return Promise.all(result);
}

init();
*/
