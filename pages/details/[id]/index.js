import Link from "next/link"
import { CustomHead } from "../../../components/CustomHead"
import DayWeatherCard from "../../../components/DayWeatherCard"
import { Layout } from "../../../components/Layout"
import NowWeatherCard from "../../../components/NowWeatherCard"
import getImportantInfo from "../../../utils/getImportantInfo"

import styles from "./details.module.css"
const { cardSection } = styles
export default function ProvinceDetail({ temperaturesWeek, dataNow }) {
  return (
    <Layout>
      <CustomHead title={`Clima ${dataNow.name} | Next.js`} />
      <NowWeatherCard province={dataNow} notSeeMore={true} />
      <section className={cardSection}>
        {temperaturesWeek?.map((day, i) => (
          <DayWeatherCard day={day} key={i} />
        ))}
      </section>
      <Link href="/">
        <a>Volver...</a>
      </Link>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const key = process.env.KEY_OPENWEATHERMAP
  const urlWeekInfo = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&lang=es&appid=${key}`

  const responseWeekInfo = await fetch(urlWeekInfo)
  const dataWeekInfo = await responseWeekInfo.json()
  const temperaturesWeek = getImportantInfo(dataWeekInfo)

  const urlNow = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&lang=es&appid=${key}`
  const responseNow = await fetch(urlNow)
  const dataNow = await responseNow.json()
  return {
    props: { temperaturesWeek, dataNow },
  }
}
