// bookmark.js
import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        items: [],
    },
    reducers: {
        addBookmark: (state, action) => {
            state.items.push(action.payload);
        },
        removeBookmark: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
