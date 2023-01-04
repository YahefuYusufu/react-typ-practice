import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./CartSlice"

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export default Store

// Path: Nike_Ecommerce/src/store/CartSlice.jsx
