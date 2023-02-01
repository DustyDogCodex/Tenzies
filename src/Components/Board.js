import React from "react"
import Dice from "./Dice"
import Confetti from "react-confetti"

function Board(){
    
    const [diceValues, setDiceValues] = React.useState(newDieRoll())

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        let allDiceHeld = diceValues.every(dice => dice.isHeld)
        let firstNumValue = diceValues[0].num
        let allNumsAreEqual = diceValues.every(dice => dice.num == firstNumValue)

        if (allDiceHeld && allNumsAreEqual){
            setTenzies(true)
        } 
    }, [diceValues])

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
            return selectedID == dice.id ? 
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
        if(tenzies == false){
            setDiceValues(prevDice => prevDice.map(dice => {
                return dice.isHeld ? 
                        dice :
                        {...dice, num: Math.ceil(Math.random() * 6)}
            }))
        } else {
            setTenzies(false)
            setDiceValues(newDieRoll)
        }
    }

    return(
        <div className="board">
            {tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all die are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-area">
                {diceElements}
            </div>
            <button className="roll" onClick={rerollDice}>{tenzies ? 'Reset The Game!' : 'Roll The Dice!'}</button>
        </div>
    )
}

export default Board