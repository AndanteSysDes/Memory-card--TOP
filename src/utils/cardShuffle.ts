import type { PokemonCard } from "../type/types";

export  const cardShuffle = (cards:PokemonCard[]) => {
  // Fisher-Yates shuffle 
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  const newCards = [...cards] 
  return newCards
}