function pokeRandomizer(deck) {
  let newDeck = [];
  let length = deck.length/2;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    newDeck.push(deck.splice(randomIndex, 1)[0]);
  }


  return [newDeck, deck];
}

export default pokeRandomizer;

