function Key(props) {
    return (
        // Button component used for each key of the keyboard
        <button type='button' className={'key ' + props.className} value={props.value} disabled={props.disabled} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Key;