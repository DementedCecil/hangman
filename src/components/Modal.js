import { useSelector } from "react-redux";

function Modal() {
    // wordCompleted will be true if word has been found
    let gameWon = useSelector((state) => state.word.wordCompleted);
    // Count will reach 11 if player has lost
    let gameLost = useSelector((state) => state.counter.value);
    // Word to be found
    let word = useSelector((state) => state.word.wordValue);

    if (gameWon) {
        return (
            // Winning message
            <div className="modal gameWon">
                <p className="bold">You Won!</p>
                <p>Congratulations on getting the word {word}.</p>
                <p>Press the 'New Game' button to play again.</p>
            </div>
        )
    } else if (gameLost === 11) {
        return (
            // Losing message
            <div className="modal gameLost">
                <p className="bold">You Lost!</p>
                <p>The correct word was {word}.</p>
                <p>Press the 'New Game' button to play again.</p>
            </div>
        )
    }
}

export default Modal;