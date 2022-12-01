import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "./userSlice"

export const User = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <>
      <div>
        <h2>List Of Users</h2>
        {user.loading && <div>Loading...</div>}
        {user.error && <div>{user.error}</div>}
        {user.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </>
  )
}
