import "./Game.css"

const Game = ( {verityLetter}) => {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={verityLetter}>Finalizar jogo</button>
        </div>
    )
}

export default Game