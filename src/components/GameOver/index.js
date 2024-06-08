import './index.css'

const GameOver = props => {
  const {score, onReset} = props

  const onResetGame = () => {
    onReset()
  }
  return (
    <div className="gameoverComponent">
      <img
        className="gameoverImage"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <h1>{score}</h1>
      <button onClick={onResetGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
