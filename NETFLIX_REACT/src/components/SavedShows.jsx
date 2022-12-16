import React, { useState } from "react"
import { UserAuth } from "../context/authContext"
import { db } from "../utils/firebase"
import { updateDoc, doc, onSnapshot } from "firebase/firestore"
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md"

export const SavedShows = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth()

  const sliderLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  React.useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows)
    })
  }, [user?.email])

  const movieRef = doc(db, "users", `${user?.email}`)
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID)
      await updateDoc(movieRef, {
        savedShows: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p className="absolute text-gray-300 hover:bg-gray-500 rounded-3xl top-4  right-4">
                  <MdClose size={25} onClick={() => deleteShow(item.id)} />
                </p>
              </div>
            </div>
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
