import '../styles/GameField.css';
import {useReducer} from 'react';
import {gameReducer, initialGameState } from '../utils/gameReducer';
import CardField from './CardField';
import StartButton from './StartButton';
import Scoreboard from './Scoreboard';
import { gameResultMessage } from '../utils/gameResultMessage';
import PlayingMessage from './PlayingMessage';

export default function GameField() {
    const [state,
        dispatch] = useReducer(gameReducer, initialGameState);

    const currentScore = state.touchedList.length;

    const handleButtonClick = () => {
        if (state.isPlaying) {
            alert( gameResultMessage(currentScore, state.highScore) );
            dispatch({type: 'END'})
        } else {
            dispatch({type: 'START'})
        }
    }

    const handleCardClick = (cardName : string) => {
        if (state.touchedList.includes(cardName)) {
            alert( gameResultMessage(currentScore, state.highScore) );
            dispatch({type: 'FAILED'})
        } else {
            dispatch({type: 'SUCCESS', payload: {
                    cardName
                }})
        }
    }

    return (
        <div className='game-field'>

            <StartButton isPlaying={state.isPlaying} handleClick={handleButtonClick}/> 
            <PlayingMessage isPlaying={state.isPlaying}/>

            <div className="game-table">
                <Scoreboard currentScore={currentScore} highScore={state.highScore}/>
                <CardField isActive={state.isPlaying} pointJudge={handleCardClick}/>
            </div>

        </div>
    )
}
