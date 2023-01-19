import React from "react"
const Flex = () => {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex">
        <div className="basis-4/12 text-center bg-slate-500">sidebar</div>
        <div className="basis-6/12 text-center bg-green-500">Menu</div>
        <div className="basis-4/12 text-center bg-yellow-500">Menu</div>
      </div>
    </div>
  )
}

export default Flex
