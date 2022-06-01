let pokemonRepository = (function () {
  let repository = [
  {name: 'Bulbasaur' , height: '0.7' , type: ['Grass' , 'Poison']},
  {name: 'Ivysaur' , height: '1', type: ['Grass' , 'Poison']},
  {name: 'Charmander' , height: '0.6' , type: 'Fire'},
  {name: 'Charmeleon' , height: '1.1' , type: 'Fire'},
  {name: 'Squirtle' , height: '0.5' , type: 'Water'},
  {name: 'Wartortle' , height: '1.1' , type: 'Water'}, 
  {name: 'Pikachu' , height: '0.4' , type: 'Electric'},
  {name: 'Raichu' , height: '0.8' , type: 'Electric'}
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon ) {
   repository.push(pokemon);
    } else {
      console.log("Invalid Pokemon Entry");
    }
  }
  
  function getAll() {
    return repository;
    }
  
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    
    pokemonlist.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }
  
  function showDetails(pokemon) {
    console.log()
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
    
})();

pokemonRepository.add({ name: "Venusaur", height: '2.0', type: ['Grass', 'Poison'] });

console.log(pokemonRepository.getAll());
  
pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);
});
