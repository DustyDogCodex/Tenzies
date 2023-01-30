import React from "react"
import Dice from "./Dice"

function Board(){
    
    const [diceValues, setDiceValues] = React.useState(newDieRoll())

    function newDieRoll() {
        const die_array = []
        for(let i = 0; i < 10; i++){
            die_array.push({id: i, num: Math.ceil(Math.random() * 6), isHeld: false})
        }
        return die_array
    }

    /* function to flip the value of dice that were selected by the player */
    function holdDice(event){
        const selectedID = event.target.id
        setDiceValues(prevDice => prevDice.map(dice => {
            return selectedID === dice.id ? 
            {...dice, isHeld: !dice.isHeld} : 
            dice
        }))
    }

    /* array containing 10 dice elements that will be displayed in dice-area div. This way dice elements will load with a new value when user rolls or resets them. */
    const diceElements = diceValues.map(dice => (
        <Dice key={dice.id} value={dice.num} heldOrNah={dice.isHeld} id={dice.id} handleClick={holdDice}/>
    ))

    /* resets state when user wants to reroll dice */
    function rerollDice(){
        setDiceValues(prevDice => prevDice.map(dice => {
            return dice.isHeld ? 
                    dice :
                    {...dice, num: Math.ceil(Math.random() * 6)}
        }))
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