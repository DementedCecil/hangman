import { useSelector } from 'react-redux';

function Count() {
    // This component displays the amount of turns remaining
    // Counter is brought from state, starting at 1, and being incremented
    // each time the user guesses a wrong letter
    const counter = useSelector((state) => state.counter.value);
    // This just appends the correct text depending on how many
    // turns are remaining (should be 'turn' instead of 'turns)
    // when there is only 1
    let text = ' turns';
    if (counter === 10) {
        text = ' turn';
    }
    
    return (
        // Displays amount of turns remaining
        <div className="count">
            <span>{(11 - counter) + text + ' remaining'}</span>

        </div>
    );
}

export default Count;