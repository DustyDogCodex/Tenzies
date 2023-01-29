function Dice(props) {
    return(
        <button className={props.heldOrNah ? 'dice dice-held' : 'dice'}>{props.value}</button>
    )
}

export default Dice