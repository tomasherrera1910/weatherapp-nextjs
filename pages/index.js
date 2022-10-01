import { useState } from "react"
import { Layout } from "../components/Layout"
import { CustomHead } from "../components/CustomHead"
import NowWeatherCard from "../components/NowWeatherCard"
import SelectCity from "../components/SelectCity"
import PROVINCIAL_CAPITALS_LIST from "../utils/listProvincialCapitals"

import styles from "../styles/Home.module.css"
const { title } = styles

export default function Home({ citiesData }) {
  const [city, setCity] = useState(() => citiesData[0])

  const handleChangeCity = (id) => {
    setCity(citiesData.find((cityData) => cityData.id === Number(id)))
  }
  return (
    <>
      <CustomHead title={"Argentina Clima | Next.js"} />
      <Layout>
        <h1 className={title}>Clima Argentina</h1>
        <SelectCity onChange={handleChangeCity} />
        <NowWeatherCard province={city} />
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  const APIkey = process.env.KEY_OPENWEATHERMAP
  const cities = PROVINCIAL_CAPITALS_LIST
  const citiesData = []
  for (const city of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&lang=es&appid=${APIkey}`
    const response = await fetch(url)
    const data = await response.json()
    citiesData.push(data)
  }

  return {
    props: { citiesData }, // will be passed to the page component as props
  }
}
