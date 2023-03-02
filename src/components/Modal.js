import { useSelector } from "react-redux";

function Modal() {
    let gameWon = useSelector((state) => state.word.wordCompleted);
    let gameLost = useSelector((state) => state.counter.value);
    let word = useSelector((state) => state.word.wordValue);

    if (gameWon) {
        return (
            <div className="modal gameWon">
                <p className="bold">You Won!</p>
                <p>Congratulations on getting the word {word}.</p>
                <p>Press the 'New Game' button to play again.</p>
            </div>
        )
    } else if (gameLost === 11) {
        return (
            <div className="modal gameLost">
                <p className="bold">You Lost!</p>
                <p>The correct word was {word}.</p>
                <p>Press the 'New Game' button to play again.</p>
            </div>
        )
    }
}

export default Modal;