import { createSlice } from '@reduxjs/toolkit'
import gsap from 'gsap'

const initialState = {
    tl: gsap.timeline()
};

export const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
});

export default timelineSlice.reducer