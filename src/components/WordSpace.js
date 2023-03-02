function WordSpace(props) {
    return (
        // For each letter which is to be revealed
        <div className="word-space" value={props.value}>
            <span className={props.className}>
                {props.value}
            </span>
        </div>
    );
}

export default WordSpace;