function WordSpace(props) {
    return (
        <div className="word-space" value={props.value}>
            <span className={props.className}>
                {props.value}
            </span>
        </div>
    );
}

export default WordSpace;