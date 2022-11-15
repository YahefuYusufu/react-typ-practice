import { formatCurrency } from "../utilities/FormatCurrencey"
import { Button, Card } from "react-bootstrap"

interface ItemsProps {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: ItemsProps) => {
  const quantity = 0
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {/* buttons */}
        <div className="m-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add To Cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ margin: ".5rem" }}
              >
                <Button variant="outline-secondary" className="w-100">
                  -
                </Button>
                <div>
                  <span>{quantity}</span>in Cart
                </div>
                <Button variant="outline-secondary" className="w-100">
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
