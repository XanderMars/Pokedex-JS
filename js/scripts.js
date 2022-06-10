let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Function to add pokemon and validate the typeof
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ){
   pokemonList.push(pokemon);
    } else {
      console.log("Invalid Pokemon Entry");
    }
  }
//getAll function returns the pokemonList
  function getAll() {
    return pokemonList;
    }
// Add buttons that are assigned with data from Pokemon list
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }
  
  //Shows the name of the currently clicked pokemon in Console
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}
  
//Shows the name of the currently clicked pokemon in Console
  function showModal(pokemon) {
    // Get Node Elements
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    // Clear previous content
    modalTitle.empty();
    modalBody.empty();

    // Create Pokemon Elements
    let pokemonName = $(`<h1>${pokemon.name}</h1>`);
    let pokemonImage = $(
     `<img class="modal-img mx-auto" src="${pokemon.svgUrl}" alt="Image of ${pokemon.name}">`
    );
    let pokemonHeight = $(
      `<p class="ml-4 mt-3 mb-0">Height: ${pokemon.height}</p>`
    );
    let pokemonWeight = $(`<p class="ml-4 mb-0">Weight: ${pokemon.weight}</p>`);
    let pokemonTypes = $(
      `<p class="ml-4">Types: ${pokemon.types.join(', ')}</p>`
    );

    // Append Pokemon Elements
    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
    modalBody.append(pokemonWeight);
    modalBody.append(pokemonTypes);
  }
  
  function loadList() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      json.results.forEach((item) => {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    })
    .catch((err) => console.log(err));
}
  
function filterList() {
  let inputValue = $('input').val();
  let list = $('li');
  list.each(function () {
    let item = $(this);
    let name = item.text();
    if (name.startsWith(inputValue)) {
      item.show();
    } else {
      item.hide();
    }
  });
}

//Promise function loads the img, height and types of the pokemon
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then((res) => res.json())
      .then((details) => {
        //add details to item
        item.weight = details.weight;
        item.imageUrl = details.sprites.front_default;
        item.svgUrl = details.sprites.other.dream_world.front_default;
        item.height = details.height;
        let types = [];
        details.types.forEach((item) => types.push(item.type.name));
        item.types = types;
      })
      .catch((err) => console.log(err));
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();
  
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
 });
});
