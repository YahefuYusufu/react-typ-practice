import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./features/theme/themeSlice"

export const store = configureStore({
  reducer: {
    darkTheme: themeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
