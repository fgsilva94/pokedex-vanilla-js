import { showLoading } from "./toggleLoading.js";

const fetchPokemons = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function getPokemonsData(list) {
  let result = list.map(async function (item) {
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

export { fetchPokemons, getPokemonsData };
