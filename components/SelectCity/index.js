import PROVINCIAL_CAPITALS_LIST from "../../utils/listProvincialCapitals"
import styles from "./selectCity.module.css"
const { inputSection } = styles

export default function SelectCity({ onChange }) {
  return (
    <div className={inputSection}>
      <select onChange={(e) => onChange(e.target.value)}>
        {PROVINCIAL_CAPITALS_LIST.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}
