// store.js
import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from './slices/fetch';
import bookmarkReducer from './slices/bookmark';

export const store = configureStore({
    reducer: {
        fetch: fetchReducer,
        bookmark: bookmarkReducer,
    },
});
