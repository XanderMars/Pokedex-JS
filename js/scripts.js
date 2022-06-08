let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Function to add pokemon and validate the typeof
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
      {
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
  
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}
//Promise function loads the img, height and types of the pokemon
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
  });
}
//Shows the name of the currently clicked pokemon in Console
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

function showModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classlist.add('is-visbile');
  let closeModal = document.querySelector('modal-close');
  closeModal.addEventListener('click', hideModal);
  modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

function hideModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classlist.remove('is-visbile');
}

document.querySelector('#pokemon-list').addEventListener
('click', () => {
  showModal(pokemon);
});

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };

    
})();
  
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
 });
});
