const setPokemons = (section) => {
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("pokemon", id);
  });
};

export default setPokemons;
