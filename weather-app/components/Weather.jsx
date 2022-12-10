import Image from "next/legacy/image"
import React from "react"

export const Weather = ({ data }) => {
  console.log(data)
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between items-center pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        {/* <p className="text-5xl">
          {Math.round(data.main.temp.toFixed(0))}&#176;
        </p> */}
        <p className="text-6xl text-lime-500 font-bold">{data.name}</p>
      </div>
      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-lg">
        <p className="text-2xl font-bold text-center pb-6">
          دىكى ھاۋارايى بولسا - {data.name}{" "}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-2xl font-bold">
              {Math.round(data.main.feels_like.toFixed(0))}
              &#176; : ھاۋارايى ھەرىكەتى
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">
              {" "}
              {data.main.humidity}% : نەملىك
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
