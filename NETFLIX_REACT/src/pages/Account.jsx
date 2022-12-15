import React from "react"
import { SavedShows } from "../components/SavedShows"

export const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/83a9e2eb-4a7d-4f79-a014-dc0fd311b9c2/SE-sv-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <div className="text-3xl md:text-5xl font-bold">My Shows</div>
        </div>
      </div>
      <SavedShows />
    </>
  )
}
