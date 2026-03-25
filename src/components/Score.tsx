import '../styles/Score.css'

type ScoreProps = {
  displayName: string;
  point: number;
}

export default function Score ({ displayName, point }: ScoreProps){
  return (
    <div
      className='score'
    >
      <p>{displayName}: </p>
      <p className='point'> {point} </p>
    </div>
  )
}