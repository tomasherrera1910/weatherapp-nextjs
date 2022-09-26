import getDayAndHour from "../../utils/getDayOfDate"

describe("Weather App in Next.js", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("Show the city selected", () => {
    cy.get("select").select("Santa Fe")
    cy.get("[data-cy='card-weather-now']").contains("Santa Fe")
    cy.get("select").select("Chaco")
    cy.get("[data-cy='card-weather-now']").contains("Resistencia")
  })

  it("Show details page if user clicking in see more", () => {
    cy.get("[data-cy='card-weather-now']").contains("Ver más...").click()

    cy.url()
      .should("include", "/details")
      .then(() => {
        for (let i = 1; i < 6; i++) {
          const date = new Date()
          date.setHours(date.getHours() + 24 * i)
          const formatDate = date.toString("AR-es")
          const { dayAbbreviation } = getDayAndHour(formatDate)

          cy.contains(dayAbbreviation)
        }
      })
  })
})
