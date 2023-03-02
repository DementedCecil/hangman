import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        // Counter starts at 1, and increments each time a user
        // selects an incorrect letter
        increment: (state) => {
            state.value += 1;
        }
    }
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;