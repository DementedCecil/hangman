import { useSelector } from 'react-redux';

function HangmanDisplay() {
    // Uses the count in state, and adds that number to the remainder
    // of the filename for whichever hangman image should be displayed
    let count = useSelector((state) => state.counter.value);

    // If count is 11, then the user has ran out of turns
    // All of the buttons are disabled at that point, which is
    // dealt with on the relevant components
    if (count === 11) {
        console.log('Game Over');
    }

    return (
        // Displays the correct image for each step, as user selects an incorrect letter
        <div className="hangman-display">
            <img src={'./assets/images/state' + count + '.gif'} alt="" />
        </div>
    );
}

export default HangmanDisplay;