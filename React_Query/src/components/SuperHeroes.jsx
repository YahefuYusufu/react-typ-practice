import React from "react"
import axios from "axios"

export const SuperHeroes = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get("http://localhost:3004/superheroes").then((response) => {
      setData(response.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return (
          <div key={hero.id}>
            <h3>{hero.name}</h3>
            <p>{hero.alterEgo}</p>
          </div>
        )
      })}
    </>
  )
}
