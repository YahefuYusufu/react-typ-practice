import React from "react"
import axios from "axios"
import { Movie } from "./Movie"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

export const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results)
    })
  }, [fetchURL])

  const sliderLeft = () => {
    const slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight = () => {
    const slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  )
}
