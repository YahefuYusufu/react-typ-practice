import React from "react"

const UseEffect = () => {
  const [val, valSet] = React.useState(1)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      valSet((v) => v + 1)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])
  return <div>{val}</div>
}

export default UseEffect
