import Dice from "./Dice"
import Confetti from "react-confetti"
import { useEffect, useState } from "react"

function Board(){
    /* setting dice values for board after each die roll */
    const [ diceValues, setDiceValues ] = useState(newDieRoll())

    const [ tenzies, setTenzies ] = useState(false)

    /* checking for tenzies each time diceValues change */
    useEffect(() => {
        //checking if the isHeld value on each dice object is true
        let allDiceHeld = diceValues.every(dice => dice.isHeld)
        
        //checking if the value for all die is the same 
        let firstNumValue = diceValues[0].num
        let allNumsAreEqual = diceValues.every(dice => dice.num == firstNumValue)

        //if all die are held and their values are the same, its TENZIES
        if (allDiceHeld && allNumsAreEqual){
            setTenzies(true)
        } 
    }, [ diceValues ])

    /* function for creating a new randomized set of die numbers on reroll */
    function newDieRoll() {
        const die_array = []
        for(let i = 0; i < 10; i++){
            die_array.push({ id: i, num: Math.ceil(Math.random() * 6), isHeld: false })
        }
        return die_array
    }

    /* function to toggle the isHeld property of the dice that was selected by the player */
    function holdDice(selectedId: number){
        setDiceValues(prevDice => prevDice.map(dice => selectedId == dice.id ? { ...dice, isHeld: !dice.isHeld } : dice
        ))
    }

    /* array containing 10 dice elements that will be displayed in dice-area div. This way dice elements will load with a new value when user rolls or resets them. */
    const diceElements = diceValues.map(dice => (
        <Dice 
            key={dice.id} 
            value={dice.num} 
            heldOrNah={dice.isHeld} 
            id={dice.id} 
            handleClick={holdDice}
        />
    ))

    /* resets state when user wants to reroll dice */
    function rerollDice(){
        if(tenzies == false){
            setDiceValues(prevDice => prevDice.map(dice => dice.isHeld ? dice : { ...dice, num: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setTenzies(false)
            setDiceValues(newDieRoll)
        }
    }

    return(
        <div 
            className="bg-orange-400 p-5 text-center rounded-lg"
        >
            <h1 className="text-5xl">Tenzies</h1>
            <p
                className="text-3xl"
            >
                Roll until all die are the same. Click each die to freeze it at its current value between rolls.
            </p>

            {/* dice display */}
            <div 
                className="mt-10 grid grid-cols-5 grid-rows-2 gap-5"
            >
                {diceElements}
            </div>
            
            {/* reroll dice button */}
            <button 
                className="py-4 px-10 bg-violet-700 text-white font-bold text-3xl mt-10 rounded-xl hover:scale-110 transition duration-300 active:scale-75" 
                onClick={rerollDice}
            >
                {tenzies ? 'Reset The Game!' : 'Roll The Dice!'}
            </button>
            
            {/* drop confetti when player wins */}
            {/* is any react project really complete without some Confetti? */}
            {tenzies && <Confetti />}
        </div>
    )
}

export default Board