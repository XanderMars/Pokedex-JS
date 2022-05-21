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
 
for (let i=0; i<pokemonList.length; i++){
  document.write(pokemonList[i].name + ' ' + 'height is ' + pokemonList[i].height + ' m! ');
        //conditional         
  if(pokemonList[i].height >= 1.0){
    document.write ('   - Wow, that\'s big!' + '<br>');
  }
  else if (pokemonList[i].height <= 1.0){
      document.write('<br>');
  }
}
