import WordSpace from './WordSpace';
import { useSelector } from 'react-redux';

function WordArea() {
    let revealedWord = useSelector((state) => state.word.revealedValue);

    return (
        <div className="word-area">
            {revealedWord.map((letter, index) => {
                return (
                    <WordSpace key={index} value={letter} />
                )
            })}
        </div>
    );
}

export default WordArea;