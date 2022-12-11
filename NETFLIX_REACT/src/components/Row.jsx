import React from "react"
import axios from "axios"
import { Movie } from "./Movie"

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results)
    })
  }, [fetchURL])
  console.log(movies)
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
      </div>
    </>
  )
}
