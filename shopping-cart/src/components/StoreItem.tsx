import { Card } from "react-bootstrap"

interface ItemsProps {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: ItemsProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
        className="rounded-3"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
