import SelectCity from "./index"
import PROVINCIAL_CAPITALS_LIST from "../../utils/listProvincialCapitals"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("<SelectCity/>", () => {
  it("show a select containing all cities from the API", () => {
    render(<SelectCity />)
    const select = document.querySelector("select")
    PROVINCIAL_CAPITALS_LIST.forEach((city) => {
      expect(select).toHaveTextContent(city.name)
    })
  })
})
