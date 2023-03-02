import Key from './Key';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counter';
import { addLetter } from '../store/word';

function KeyboardArea() {
    const dispatch = useDispatch();
    let secretWord = useSelector((state) => state.word.wordValue);
    let completed = useSelector((state) => state.word.wordCompleted);
    let counter = useSelector((state) => state.counter.value);

    function checkDisabled() {
        return completed || counter === 11;
    }

    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M'
    ]

    function handleClick(e) {
        if (secretWord.includes(e.target.textContent)) {
            console.log('Included');
            e.target.classList.add('success');
            dispatch(addLetter(e.target.textContent));
            e.target.setAttribute('disabled', false);
        } else {
            console.log('Not Included');
            e.target.classList.add('fail');
            dispatch(increment());
            e.target.setAttribute('disabled', false);
        }
    }

    return (
        <div className="keyboard-area">
            {keys.map((letter, index) => {
                let row = 'row-2';
                if (index < 10) {
                    row = 'row-1';
                } else if (index > 18 ) {
                    row = 'row-3';
                }

                return (
                    <Key key={letter} value={letter} disabled={checkDisabled()}
                    className={row}
                    onClick={(e) => handleClick(e)} />
                )
            })}
        </div>
    );
}

export default KeyboardArea;