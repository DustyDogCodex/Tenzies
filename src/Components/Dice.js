function Dice(props) {
    return(
        <button id={props.id} className={props.heldOrNah ? 'dice dice-held' : 'dice'} onClick={props.handleClick}>{props.value}</button>
    )
}

export default Dice