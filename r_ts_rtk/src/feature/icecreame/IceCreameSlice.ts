import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

type InitialState = {
  numOfIceCreams: number
}

const initialState: InitialState = {
  numOfIceCreams: 20,
}

const iceCreameSlice = createSlice({
  name: "iceCreame",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--
    })
  },
})

export default iceCreameSlice.reducer
export const { ordered, restocked } = iceCreameSlice.actions
