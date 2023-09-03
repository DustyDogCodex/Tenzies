type DiceProps = {
    value: number,
    heldOrNah: boolean,
    id: number,
    handleClick: (id: number) => void
}

function Dice({ value, heldOrNah, id, handleClick }: DiceProps ) {
    return(
        <button  
            className={heldOrNah ? 'dice dice-held' : 'dice'} 
            onClick={() => handleClick(id)}
        >
            {value}
        </button>
    )
}

export default Dice