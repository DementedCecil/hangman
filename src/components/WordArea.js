import WordSpace from './WordSpace';
import { useSelector } from 'react-redux';

function WordArea() {
    // Brings the word from the store
    let revealedWord = useSelector((state) => state.word.revealedValue);

    return (
        <div className="word-area">
            {/* Maps a space for each of the letters in the word */}
            {revealedWord.map((letter, index) => {
                return (
                    <WordSpace key={index} value={letter} />
                )
            })}
        </div>
    );
}

export default WordArea;