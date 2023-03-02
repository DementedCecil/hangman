import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import wordReducer from './word';

export default configureStore({
    reducer: {
        counter: counterReducer,
        word: wordReducer
    }
});