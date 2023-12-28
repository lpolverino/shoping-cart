import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p> made by : <a href='https://github.com/lpolverino'>@lpolverino</a></p>
        <a href="https://github.com/lpolverino/shoping-cart">look the project Repository</a>
    </div>
  )
}

export default Footer