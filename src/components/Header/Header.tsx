import styles from './Header.module.css'
import logo from "../../assets/Logo(1).png"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  )
}