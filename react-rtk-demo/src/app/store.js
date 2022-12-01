import { configureStore } from "@reduxjs/toolkit"

import cakeReducer from "../feature/cake/cakeSlice"
import iceCreameReducer from "../feature/icecreame/IceCreameSlice"
import userReducer from "../feature/user/userSlice"

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreameReducer,
    user: userReducer,
  },
})
export default store
