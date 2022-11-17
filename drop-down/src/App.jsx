import React from "react"
import data from "./data/data.json"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Card, Container } from "react-bootstrap"

function App() {
  const [items, setItems] = React.useState(data)

  const dataMap = items.map((el, i) => {
    return (
      <Draggable key={el.id} draggableId={el.id.toString()} index={i}>
        {(provided) => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card
                style={{
                  width: "100%",
                  padding: 50,
                  margin: 20,
                  border: "1px solid white",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                {el.name}
              </Card>
            </div>
          )
        }}
      </Draggable>
    )
  })

  const handleOnDragEnd = (res) => {
    const itemsCopy = [...items]
    const [reorderedItem] = itemsCopy.splice(res.source.index, 1)
    itemsCopy.splice(res.destination.index, 0, reorderedItem)
    setItems(itemsCopy)
  }

  return (
    <div>
      <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items">
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {dataMap}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>
      </Container>
    </div>
  )
}

export default App
