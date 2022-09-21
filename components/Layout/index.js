import styles from "./layout.module.css"
const { container } = styles
export function Layout({ children }) {
  return <main className={container}>{children}</main>
}
