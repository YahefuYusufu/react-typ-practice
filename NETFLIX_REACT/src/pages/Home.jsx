import React from "react"
import { Main } from "../components/Main"
import { Row } from "../components/Row"
import requests from "../data/Requests"

export const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Pupolar" fetchURL={requests.requestPopular} />
      <Row title="TopRated" fetchURL={requests.requestHerror} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Herror" fetchURL={requests.requestHerror} />
      <Row title="UpComing" fetchURL={requests.requestUpcoming} />
    </div>
  )
}
