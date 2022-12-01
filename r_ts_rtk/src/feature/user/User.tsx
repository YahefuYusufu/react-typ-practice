import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hoos"
import { fetchUsers } from "./userSlice"

export const User = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
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
