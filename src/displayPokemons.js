import { getElement } from "./utils.js";
import { hideLoading } from "./toggleLoading.js";

const displayPokemons = (pokemons) => {
  const section = getElement(".section-center");
  const title = getElement(".title");
  if (pokemons.length === 0) {
    hideLoading();
    title.textContent = "sorry, no pokemon matched your search";
    section.innerHTML = null;
    return;
  }

  const newPokemons = pokemons
    .map((pokemon) => {
      const { id, name, frontImg } = pokemon;
      return `<a href="./pokemon.html">
          <article class="pokemon" data-id="${id}">
            <img src="${frontImg}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");

  hideLoading();
  title.textContent = "";
  section.innerHTML = newPokemons;
  return section;
};

export default displayPokemons;
