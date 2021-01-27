import { Link } from "gatsby"
import React from "react"
import styles from "./Header.module.css"

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
