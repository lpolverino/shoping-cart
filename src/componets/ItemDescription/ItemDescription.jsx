import React from 'react'
import styles from "./itemDescription.module.css"

const ItemDescription = ({name, image, description, price}) => {
  return (
    <div className={styles.description}>
        <p className='item-name'>{name}</p>
        <img src={image} alt={"an image of " + name} className='item-image'/>
    </div>
  )
}

export default ItemDescription