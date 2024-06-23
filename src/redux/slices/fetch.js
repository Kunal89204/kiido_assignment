import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await axios.get('https://core.dev.kiido.app/collaboration-api/collaborator/')
    return response.data
})

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        isLoading: false, 
        data: null,
        isError: false,
        errorMessage: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = '';
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = 'Failed to fetch data. Please try again later.';
        })
    }
})

export default fetchSlice.reducer;
