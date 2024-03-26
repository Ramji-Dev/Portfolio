import { createSlice } from '@reduxjs/toolkit'

const theme = JSON.parse(localStorage.getItem('theme'))

const initialState = {
    theme
}

export const themeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer