import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"

type ShoppingCartPropviderProps = {
  children: ReactNode
}

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  openCart: () => void
  closeCart: () => void
  cartItems: CartItem[]
}
type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShopingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartPropviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  const increaseCartQuantity = (id: number) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }]
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const decreaseCartQuantity = (id: number) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }]
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openCart,
        closeCart,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
