import DayWeatherCard from "./index"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("<DayWeatherCard/>", () => {
  const dayTest = {
    day: "Lun, 25/12",
    minTemp: {
      hour: "9:00hs",
      temp: 14,
      weather: {
        icon: "01d",
        description: "Rain",
      },
    },
    maxTemp: {
      hour: "18:00hs",
      temp: 22,
      weather: {
        icon: "01d",
        description: "Clear",
      },
    },
  }
  it("show a day min and max temps from the props", () => {
    const component = render(<DayWeatherCard day={dayTest} />)

    component.getByText(dayTest.day)

    component.getByText(`a las ${dayTest.minTemp.hour}:`)
    component.getByText(`${dayTest.minTemp.temp}°`)
    component.getByAltText(dayTest.minTemp.weather.description)
    component.getByText(`${dayTest.minTemp.weather.description}`)

    component.getByText(`a las ${dayTest.maxTemp.hour}:`)
    component.getByText(`${dayTest.maxTemp.temp}°`)
    component.getByText(`${dayTest.maxTemp.weather.description}`)
    component.getByText(`${dayTest.maxTemp.weather.description}`)
  })
})
