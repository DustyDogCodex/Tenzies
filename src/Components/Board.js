import React from "react"
import Dice from "./Dice"

function Board(){
    
    const [diceValues, setDiceValues] = React.useState(newDieRoll())

    function newDieRoll() {
        const die_array = []
        for(let i = 0; i < 10; i++){
            die_array.push({id: i, num: Math.ceil(Math.random() * 6), isHeld: true})
        }
        return die_array
    }

    /* array containing 10 dice elements that will be displayed in dice-area div. This way dice elements will load with a new value when user rolls or resets them. */
    const diceElements = diceValues.map(dice => (
        <Dice key={dice.id} value={dice.num} heldOrNah={dice.isHeld}/>
    ))

    /* resets state when user wants to reroll dice */
    function rerollDice(){
        setDiceValues(newDieRoll())
    }

    return(
        <div className="board">
            <h1>Tenzies</h1>
            <p>Roll until all die are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-area">
                {diceElements}
            </div>
            <button className="roll" onClick={rerollDice}>Roll the dice!</button>
        </div>
    )
}

export default Board