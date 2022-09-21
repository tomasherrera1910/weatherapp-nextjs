const days = {
  0: "Dom",
  1: "Lun",
  2: "Mar",
  3: "Mie",
  4: "Jue",
  5: "Vie",
  6: "Sab",
}
export default function getDayAndHour(day) {
  const date = new Date(day)
  const dayInfo = date.getDay()
  return {
    hour: date.getHours().toString() + ":00hs",
    dayAbbreviation:
      days[dayInfo] + `, ${date.getDate()}/${date.getMonth() + 1}`,
  }
}
