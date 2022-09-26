import Image from "next/image"
import Link from "next/link"
import styles from "./nowWeatherCard.module.css"
const { cityInfo } = styles

export default function NowWeatherCard({ province, notSeeMore }) {
  return (
    <article className={cityInfo} data-cy="card-weather-now">
      <h3>
        <span>{province?.name}</span> {province?.main?.temp}°
      </h3>
      <p>Sensación térmica: {province?.main?.feels_like}°</p>
      <div>
        <Image
          src={`http://openweathermap.org/img/w/${province?.weather[0]?.icon}.png`}
          alt={province?.weather[0]?.description}
          width={75}
          height={75}
          layout="fixed"
        />
        <span>{province?.weather[0]?.description}</span>
      </div>
      <p>
        {province?.main?.temp_min}° | {province?.main?.temp_max}°
      </p>
      {!notSeeMore && (
        <Link href={`details/${province?.id}`}>
          <a>Ver más...</a>
        </Link>
      )}
    </article>
  )
}
