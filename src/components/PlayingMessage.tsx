type PlayingMessageProps = {
    isPlaying: boolean;
}

export default function PlayingMessage({isPlaying} : PlayingMessageProps) {

    return ( 
      <> 
        {isPlaying
            ? (
                <p>Press
                    <b> STOP </b>
                    when you want to quit the game.</p>
            )
            : (
                <p>Press
                    <b> START </b>
                    to start Memory Game!</p>
            )
        }
      </>
    )
}