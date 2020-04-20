import React from "react";
import Pokedex from "./Pokedex";
import pokemonList from "./pokemonList";
import pokeRandomizer from "./helpers";
import "./Pokegame.css";

function Pokegame(props){
  const decks = pokeRandomizer(pokemonList);
  const scores = decks.map(function(deck) {
   return deck.reduce(function(total, card) {
      return total + card.base_experience
    }, 0) 
  });
  
  return (
    <div className="Pokegame">
      <Pokedex pokemonList={decks[0]} score={scores[0]} isWinner={scores[0]>scores[1]}/>
      <Pokedex pokemonList={decks[1]} score={scores[1]} isWinner={scores[0]<scores[1]}/>
    </div>
  )

  // return (
  //   <div className="Pokegame">
  //     {decks.map(d => <Pokedex pokemonList={d} />)}
  //   </div>
  // )
}

export default Pokegame;

