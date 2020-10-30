import { hideLoading } from "./toggleLoading.js";
import { getElement } from "./utils.js";

const displaySinglePokemon = (pokemon) => {
  hideLoading();
  const {
    name,
    height,
    weight,
    abilities,
    stats,
    types,
    frontImg,
    backImg,
  } = pokemon[0];

  console.log(abilities, stats);

  const nameDOM = getElement(".pokemon-name");
  const sizesDOM = getElement(".pokemon-info-sizes");
  const abilitiesDOM = getElement(".pokemon-info-abilities");
  const typesDOM = getElement(".pokemon-info-types");
  const statsDOM = getElement(".pokemon-info-stats");
  const frontImgDOM = getElement(".front-img");
  const backImgDOM = getElement(".back-img");

  document.title = name.toUpperCase();
  nameDOM.textContent = name;

  sizesDOM.innerHTML = `<li>Height : ${height / 10} meters</li>
  <li>Weight : ${weight / 10} kg</li>`;

  abilitiesDOM.innerHTML = abilities
    .map((item) => `<li>${item.ability.name}</li>`)
    .join("");

  typesDOM.innerHTML = types
    .map((item) => `<li>${item.type.name}</li>`)
    .join("");

  statsDOM.innerHTML = stats
    .map((item) => `<li>${item.stat.name} : ${item.base_stat}</li>`)
    .join("");

  frontImgDOM.src = frontImg;
  backImgDOM.src = backImg;
};

export default displaySinglePokemon;
