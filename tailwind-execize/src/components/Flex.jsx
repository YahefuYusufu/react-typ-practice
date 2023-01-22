import React from "react"
const Flex = () => {
  return (
    <div className="h-screen text-white bg-slate-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="p-6 rounded-lg bg-slate-800">First coloms</div>
          <div className="p-6 rounded-lg bg-slate-700">Second coloms</div>
          <div className="p-6 rounded-lg bg-slate-600">Third coloms</div>
          <div className="p-6 col-span-2 rounded-lg bg-slate-500">
            Fourth coloms
          </div>
          <div className="p-6 rounded-lg bg-slate-500">Fourth coloms</div>
          <div className="p-6 rounded-lg bg-slate-500">Fourth coloms</div>
        </div>
      </div>
    </div>
  )
}

export default Flex
