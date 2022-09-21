import getDayAndHour from "./getDayOfDate"

export default function getImportantInfo(data) {
  //La data contiene un array de 40 elementos, con la temperatura del dia en 8 horas distintas
  //Con esto conseguimos un array de 8 elementos por día
  const days = []
  for (let i = 0; i < 5; i++) {
    const since = i === 0 ? 0 : 8 * i
    const to = since + 8
    days.push(data.list.slice(since, to))
  }
  //Con este mapeo obtenemos la temperatura de cada uno de los días ordenadas de menor a mayor con la respectiva hora
  const temperaturesInfo = days.map((day) =>
    day
      .map((hour) => ({
        weather: {
          description: hour.weather[0].description,
          icon: hour.weather[0].icon,
        },
        temp: hour.main.temp,
        info: getDayAndHour(hour.dt_txt),
      }))
      .sort((a, b) => a.temp - b.temp)
  )
  const temperatures = temperaturesInfo.map((day) => ({
    day: day[0].info.dayAbbreviation,
    minTemp: {
      temp: day[0].temp,
      hour: day[0].info.hour,
      weather: day[0].weather,
    },
    maxTemp: {
      temp: day[day.length - 1].temp,
      hour: day[day.length - 1].info.hour,
      weather: day[day.length - 1].weather,
    },
  }))
  return temperatures
}
