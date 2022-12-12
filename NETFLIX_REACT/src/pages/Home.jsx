import React from "react"
import { Main } from "../components/Main"
import { Row } from "../components/Row"
import requests from "../data/Requests"

export const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId={1} title="Latest" fetchURL={requests.requestLatest} />
      <Row rowId={2} title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowId={3} title="Pupolar" fetchURL={requests.requestPopular} />
      <Row rowId={4} title="NowPlaying" fetchURL={requests.requestNowPlaying} />
      <Row rowId={5} title="TopRated" fetchURL={requests.requestTopRated} />
    </div>
  )
}
