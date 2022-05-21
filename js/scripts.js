let pokemonList = [
  {name: 'Bulbasaur' , height: '0.7 m' , type: ['Grass' , 'Poison']},
  {name: 'Ivysaur' , height: '1 m', type: ['Grass' , 'Poison']},
  {name: 'Charmander' , height: '0.6 m' , type: 'Fire'},
  {name: 'Charmeleon' , height: '1.1 m' , type: 'Fire'},
  {name: 'Squirtle' , height: '0.5 m' , type: 'Water'},
  {name: 'Wartortle' , height: '1.1 m' , type: 'Water'}, 
  {name: 'Pikachu' , height: '0.4 m' , type: 'Electric'},
  {name: 'Raichu' , height: '0.8 m' , type: 'Electric'}
  ];
 
for (let i=0; i<pokemonList.length; i++){
  document.write(pokemonList[i].name + ' ' + 'height is' + pokemonList.height + '!';
        //conditional         
  if(pokemonList[i].height >= 1.0 m){
    document.write (' - Wow, that\'s big!' + '<br>');
  }
}
