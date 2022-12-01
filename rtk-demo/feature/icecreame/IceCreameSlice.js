const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfIceCreams: 20,
}

const iceCreameSlice = createSlice({
  name: "iceCreame",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    },
  },
})

module.exports = iceCreameSlice.reducer
module.exports.iceCreameActions = iceCreameSlice.actions
