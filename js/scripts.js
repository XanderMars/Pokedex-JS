let pokemonRepository = (function () {
  let pokemonList = [
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
   pokemonList.push(pokemon);
    }
  
  function getAll() {
    return pokemonList;
    }
  
  function size(pokemon){
      document.write(pokemon.name + ' ' + 'height is ' + pokemon.height + ' m! ');
        //conditional         
  if(pokemon.height >= 1.0){
    document.write ('   - Wow, that\'s big!' + '<br>');
  }
  else {
      document.write('<br>');
  }
}

  return {
    add: add,
    getAll: getAll,
    size: size
  };
    
})();

pokemonRepository.add({ name: "Venusaur", height: '2.0', type: ['Grass', 'Poison'] });
console.log(pokemonRepository.getAll());
  
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.size(pokemon)
});
    
