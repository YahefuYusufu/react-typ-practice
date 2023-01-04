import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  //Let suppose database
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setItemsToCart: (state, action) => {
      //   state.cartItems.push(action.payload)
      //add same cart to togather(cartQuantity)
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.success(`Item QTY increased by 1`)
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)
        toast.success(`${action.payload.title} added to Cart`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
  },
})

export const { setOpenCart, setCloseCart, setItemsToCart } = cartSlice.actions

export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems

export default cartSlice.reducer
