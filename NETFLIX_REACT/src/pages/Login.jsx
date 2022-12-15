import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../contenxt/authContext"

export const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await logIn(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden md:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/83a9e2eb-4a7d-4f79-a014-dc0fd311b9c2/SE-sv-20221206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
        {/* Overlay */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] m-auto py-16">
              <h1 className="text-4xl font-bold text-center">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded p-3 my-2 bg-gray-700"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded p-3 my-2 bg-gray-700"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 hover:bg-red-800 px-6 py-3 my-6 rounded cursor-pointer text-white">
                  Sign In
                </button>
                {error && (
                  <p className="p-3 bg-white text-red-600 py-2 my-2 rounded">
                    {error}
                  </p>
                )}

                <div className="flex justify-between text-center text-md text-gray-500">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me?
                  </p>
                  <p className="">Need help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to NextFlix?</span>
                  <Link to="/login">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
