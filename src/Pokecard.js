import React from 'react';

// todo: docstring
function Pokecard({ id, name, type, base_experience }) {

  const style = {
    border: "1px solid #333",
    borderRadius: "6px",
    backgroundColor: "#ccc",
    minWidth: "250px",
    display: "inline-block",
    margin: "10px"
  }

  return (
    <div style={ style }>
      <h3>{ name }</h3>
      <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` } alt={ name } />
      <p>{ type }</p>
      <p>Exp: { base_experience }</p>
    </div>
  )
}


export default Pokecard;