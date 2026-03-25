import Card from './Card'
import '../styles/CardField.css'
import { useEffect, useState } from 'react';
import type { PokemonCard } from '../type/types';
import { cardShuffle } from '../utils/cardShuffle';

type CardFieldProps = {
  isActive: boolean;
  pointJudge: (cardName: string) => void;
}

const CARDAMOUNT = 18;

export default function CardField ({ isActive, pointJudge }: CardFieldProps) {
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(()=>{
    let ignore = false;
    async function loadCards(){
      const pokemon : PokemonCard[] = new Array(CARDAMOUNT);
      for(let i = 0; i < pokemon.length; i++){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}/`)
        const data = await res.json()
        pokemon[i] = {
          name: data.name,
          imgUrl: data.sprites.front_default
        }
      }
      if(!ignore){
        const initialSet = cardShuffle(pokemon);
        setCards(initialSet);
      }
    }
    loadCards();

    return () => {
      ignore = true;
    }
  }, [])

  const handleCardClick = (cardName:string) => {
    if(isActive){
      pointJudge(cardName)
      setCards( cardShuffle(cards) )
    }
  }

  return (
    <div
      className='card-field'
    >
      {cards.map((card) => (
        <Card key={card.name} pokemon={card} handleClick={handleCardClick} isActive={isActive} />
      ))}
    </div>
  )
}