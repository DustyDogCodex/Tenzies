function Board(){
    return(
        <div className="board">
            <h1>Tenzies</h1>
            <p>Roll until all die are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-area">
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
                <button className="dice"></button>
            </div>
            <button className="roll">Roll the dice!</button>
        </div>
    )
}

export default Board