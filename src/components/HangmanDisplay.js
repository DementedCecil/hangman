import { useSelector } from 'react-redux';

function HangmanDisplay() {
    let count = useSelector((state) => state.counter.value);

    if (count === 11) {
        console.log('Game Over');
    }

    return (
        <div className="hangman-display">
            <img src={'./assets/images/state' + count + '.gif'} alt="" />
        </div>
    );
}

export default HangmanDisplay;