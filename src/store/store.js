import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import wordReducer from './word';

export default configureStore({
    // Store for both the counter, which counts from 1 to 11
    // and the random word to be guessed
    reducer: {
        counter: counterReducer,
        word: wordReducer
    }
});