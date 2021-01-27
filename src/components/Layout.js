import React from "react"

import Header from "./Header"
import "minireset.css"
import "fontsource-fira-sans/700-italic.css"
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`よしたく 雑記ブログ`} />
      <div className={styles.container}>
        <main className={styles.mainPane}>{children}</main>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
