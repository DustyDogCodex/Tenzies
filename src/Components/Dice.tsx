type DiceProps = {
    value: number,
    heldOrNah: boolean,
    id: number,
    handleClick: (id: number) => void
}

function Dice({ value, heldOrNah, id, handleClick }: DiceProps ) {
    return(
        <button  
            className={`h-12 w-12 text-4xl border-0 rounded-lg shadow-lg shadow-neutral-700 ${ heldOrNah ? 'bg-green-500' : 'bg-white'} hover:scale-125 transition duration-300 hover:bg-green-500`}  
            onClick={() => handleClick(id)}
        >
            {value}
        </button>
    )
}

export default Dice