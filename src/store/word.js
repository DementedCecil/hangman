import { createSlice } from '@reduxjs/toolkit';
import wordList from '../data/wordList';

// Calculates a random number from the amount of words
// in the imported word list above
let randomNo = Math.floor(Math.random() * wordList.length);

// Sets the word found at that random position in the array
// and converts it to uppercase
let word = wordList[randomNo].toUpperCase();

// Converts word to an array, also sets another blank array,
// and then for each letter in the chosen word, generates an empty
// space in the new array
let wordSplit = word.split('');
let blankWord = []
wordSplit.forEach(() => {
    blankWord.push('');
})

// wordValue is the chosen random word
// revealedValue is used and updated as user finds the letters
// wordCompleted starts as false, changes to true if user gets the whole word
const initialState = {
    wordValue: wordSplit,
    revealedValue: blankWord,
    wordCompleted: false
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        // Receives a successful letter from the keyboard
        // Each position in the wordValue array is checked, and if
        // the received letter is found, adds it to the same position in the
        // blank array
        addLetter: (state, action) => {
            for (let i = 0; i < state.wordValue.length; i++) {
                if (state.wordValue[i] === action.payload) {
                    state.revealedValue[i] = action.payload;
                }
            }

            // Finally checks if the whole word has been found
            // If so, sets wordCompleted to true
            if (JSON.stringify(state.wordValue) === JSON.stringify(state.revealedValue)) {
                state.wordCompleted = true;
                console.log('Word Complete: ' + state.wordCompleted);
            }
        }
    }
});

export const { addLetter } = wordSlice.actions;

export default wordSlice.reducer;