import { createSlice } from "@reduxjs/toolkit"

const themeFromLocalStorage = !!localStorage.getItem("movies-theme")

type ThemeState = {
  theme: boolean
  loading: boolean
}
const initialState: ThemeState = {
  theme: themeFromLocalStorage,
  loading: false,
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem("movies-theme", String(!state.theme))
      // return loading equal to true
      return { ...state, theme: !state.theme, loading: true }
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
