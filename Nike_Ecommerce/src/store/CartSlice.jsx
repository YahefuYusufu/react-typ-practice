import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [], //Let suppose database
  cartTotalAmount: 0,
  cartTotalQantity: 0,
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
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} removed from Cart`)
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      state.cartItems[itemIndex].cartQuantity += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success(`${action.payload.title} added to Cart`)
    },

    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.success(`Item QTY Decreased`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setClearCartItems: (state, action) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      toast.success(`Cart Cleared`)
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const totalPrice = price * cartQuantity

          cartTotal.totalAmount += totalPrice
          cartTotal.totalQTY += cartQuantity

          return cartTotal
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      )

      state.cartTotalAmount = totalAmount
      state.cartTotalQantity = totalQTY
    },
  },
})

export const {
  setOpenCart,
  setCloseCart,
  setItemsToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = cartSlice.actions

export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems

export const selectTotalAmount = (state) => state.cart.cartTotalAmount
export const selectTotalQTY = (state) => state.cart.cartTotalQantity

export default cartSlice.reducer
