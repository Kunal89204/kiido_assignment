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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            console.log('Error', action.payload)
            state.isError = true
        })
    }
})

export default fetchSlice.reducer