import NowWeatherCard from "./index"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("<NowWeatherCard/>", () => {
  const city = {
    id: 1010,
    name: "City for the Test",
    main: {
      temp: 15,
      feels_like: 10,
      temp_min: 10,
      temp_max: 20,
    },
    weather: [
      {
        icon: "01d",
        description: "Rain",
      },
    ],
  }
  it("show a city from the props, with no see more button", () => {
    const component = render(
      <NowWeatherCard province={city} notSeeMore={true} />
    )

    component.getByText(city.name)
    component.getByText(`${city.main.temp}°`)
    component.getByText(`Sensación térmica: ${city.main.feels_like}°`)
    component.getByText(city.weather[0].description)
    component.getByAltText(city.weather[0].description)
    component.getByText(`${city.main.temp_min}° | ${city.main.temp_max}°`)
    expect(component.queryByText("Ver más...")).toBe(null)
  })
  it("show see more button if 'notSeeMore' is false", () => {
    const component = render(
      <NowWeatherCard province={city} notSeeMore={false} />
    )
    component.getByText("Ver más...")
  })
})
