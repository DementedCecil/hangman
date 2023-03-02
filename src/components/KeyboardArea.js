import Key from './Key';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counter';
import { addLetter } from '../store/word';

function KeyboardArea() {
    const dispatch = useDispatch();
    // Word to be found
    let secretWord = useSelector((state) => state.word.wordValue);
    // wordCompleted is true if all letters have been found
    let completed = useSelector((state) => state.word.wordCompleted);
    // Counter will be 11 if the player has lost
    let counter = useSelector((state) => state.counter.value);

    // Checks if either completed is true, or counter is 11
    function checkDisabled() {
        return completed || counter === 11;
    }

    // Keys will be mapped to display the keyboard
    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M'
    ]

    // Function fired on each letter click
    function handleClick(e) {
        // If letter found, Success added to button class, to style it green
        // Dispatch found letter which will in turn update the word display
        // Disables the letter button
        if (secretWord.includes(e.target.textContent)) {
            console.log('Included');
            e.target.classList.add('success');
            dispatch(addLetter(e.target.textContent));
            e.target.setAttribute('disabled', false);
        } else {
            // If letter not found, Fail added to button class, to style it red
            // Increments the count, which in turn updates the 'turns remaining'
            // and also the hangman state
            // Disables the letter button
            console.log('Not Included');
            e.target.classList.add('fail');
            dispatch(increment());
            e.target.setAttribute('disabled', false);
        }
    }

    return (
        // All letters of keyboard are mapped, and given classNames
        // which will help position them correctly
        <div className="keyboard-area">
            {keys.map((letter, index) => {
                let row = 'row-2';
                if (index < 10) {
                    row = 'row-1';
                } else if (index > 18 ) {
                    row = 'row-3';
                }

                return (
                    // checkDisabled function will be false at first, and then change to
                    // true after being clicked, to prevent it being clicked again
                    <Key key={letter} value={letter} disabled={checkDisabled()}
                    className={row}
                    onClick={(e) => handleClick(e)} />
                )
            })}
        </div>
    );
}

export default KeyboardArea;