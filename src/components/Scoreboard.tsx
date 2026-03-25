import '../styles/Scoreboard.css'
import Score from './Score';

type ScoreboardProps = {
  currentScore: number;
  highScore: number;
}

export default function Scoreboard({currentScore, highScore}: ScoreboardProps) {
  return (
          <div
            className='scoreboard'
          >
            <Score displayName="Score" point={currentScore} />
            <Score displayName="Best score" point={highScore} />
          </div>

  )
}
