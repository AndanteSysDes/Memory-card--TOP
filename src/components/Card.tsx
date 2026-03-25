import '../styles/Card.css'
import type { PokemonCard } from '../type/types';

type CardProps ={
  pokemon: PokemonCard;
  handleClick: (cardName:string) => void;
  isActive: boolean;
}

export default function Card ({ pokemon, handleClick, isActive }:CardProps) {
  return (
    <div className={`card ` + `${isActive ? 'clickable' : ''}`}>
      <div
        className='card-container'
        onClick={()=>handleClick(pokemon.name)}
      >
        <img
          className='card-img' 
          src={pokemon.imgUrl} 
        />
        <p 
          className="card-name"
        >
          {pokemon.name}
        </p>
      </div>
    </div>
  )
}