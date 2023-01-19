import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: ''
};

export const fetchGreetings = createAsyncThunk(
    'greeting/fetchGreeting',
    async () => {
        const response = await fetch('http://127.0.0.1:3000/api/v1/greetings/random');
        const data = await response.json();
        return data.message;
    }
);

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        fetchGreeting: (state, action) => {
            state.message = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGreetings.fulfilled, (state, action) => {
                state.message = action.payload;
            });
    }
});

export const { fetchGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
