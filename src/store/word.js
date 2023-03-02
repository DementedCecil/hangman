import { createSlice } from '@reduxjs/toolkit';
import wordList from '../data/wordList';

let randomNo = Math.floor(Math.random() * wordList.length);

let word = wordList[randomNo].toUpperCase();

let wordSplit = word.split('');
let blankWord = []
wordSplit.forEach(() => {
    blankWord.push('');
})

const initialState = {
    wordValue: wordSplit,
    revealedValue: blankWord,
    wordCompleted: false
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.wordValue = action.payload;
        },
        addLetter: (state, action) => {
            for (let i = 0; i < state.wordValue.length; i++) {
                if (state.wordValue[i] === action.payload) {
                    state.revealedValue[i] = action.payload;
                }
            }

            if (JSON.stringify(state.wordValue) === JSON.stringify(state.revealedValue)) {
                state.wordCompleted = true;
                console.log('Word Complete: ' + state.wordCompleted);
            }
        }
    }
});

export const { setValue, addLetter } = wordSlice.actions;

export default wordSlice.reducer;