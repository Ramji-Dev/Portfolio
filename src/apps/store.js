import { configureStore } from '@reduxjs/toolkit'
import themeChanger from '../features/ThemeSlice/themeSlice'
import timeline from '../features/Timeline/timelineSlice'

export const store = configureStore({
    reducer:  {
        themeChanger,
        timeline
    }
})