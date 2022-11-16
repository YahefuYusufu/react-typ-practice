import { useShopingCart } from "../context/ShoppingCartContext"

import { Offcanvas, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/FormatCurrencey"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppiingCartProps = {
  isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: ShoppiingCartProps) => {
  const { closeCart, cartItems } = useShopingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
