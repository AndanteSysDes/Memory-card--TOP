import '../styles/StartButton.css';

type StartButtonProps = {
  isPlaying: boolean;
  handleClick: () => void;
}

export default function StartButton({ isPlaying, handleClick }: StartButtonProps) {
  
  return (
        <div className="button-area">
          <button 
            type='button'
            onClick={handleClick}
          >
            {isPlaying ? 'STOP' : 'START'}
          </button>
        </div>
  )
}