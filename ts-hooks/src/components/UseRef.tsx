import React from "react"

const UseRef = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default UseRef
