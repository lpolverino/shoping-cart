import React from 'react'
import LinksButton from '../LinksButton/LinksButton'
import styles from "./imageSlider.module.css"

const ImageSlider = () => {
  return (
    <div className={styles.slider}>
        <p>Like what you see?</p>
         <LinksButton  link ="shop" name="Go To Shop"></LinksButton>
    </div>
  )
}

export default ImageSlider