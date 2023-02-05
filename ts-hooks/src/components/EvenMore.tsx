import { ReactElement, ReactNode } from "react"

export interface HeadingProps {
  title: string
}
export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>
}

export type ListProps = <ListItem>({
  items,
  render,
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) => ReactElement

export const List: ListProps = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}

function TestComponent() {
  return (
    <div>
      <Heading title="Hello" />
      <List
        items={["a", "b", "c", "prg"]}
        render={(str) => <strong>{str}</strong>}
      />
    </div>
  )
}

export default TestComponent
