import Image from "next/image"
import styles from "./dayWeatherCard.module.css"
const { dayCard, dayStyle, tempSection, tempCard, iconSection } = styles
export default function DayWeatherCard({ day }) {
  return (
    <article className={dayCard}>
      <h3 className={dayStyle}>{day.day}</h3>
      <section className={tempSection}>
        <div className={tempCard}>
          <h4>Temp. Min.</h4>
          <p>
            a las {day.minTemp.hour}: <span>{day.minTemp.temp}°</span>
          </p>
          <div className={iconSection}>
            <Image
              src={`http://openweathermap.org/img/w/${day?.minTemp.weather.icon}.png`}
              alt={day?.minTemp.weather.description}
              width={60}
              height={60}
              layout="fixed"
            />
            <span>{day?.minTemp.weather.description}</span>
          </div>
        </div>
        <div className={tempCard}>
          <h4>Temp. Max.</h4>
          <p>
            a las {day.maxTemp.hour}: <span>{day.maxTemp.temp}°</span>
          </p>
          <div className={iconSection}>
            <Image
              src={`http://openweathermap.org/img/w/${day?.maxTemp.weather.icon}.png`}
              alt={day?.maxTemp.weather.description}
              width={60}
              height={60}
              layout="fixed"
            />
            <span>{day?.maxTemp.weather.description}</span>
          </div>
        </div>
      </section>
    </article>
  )
}
