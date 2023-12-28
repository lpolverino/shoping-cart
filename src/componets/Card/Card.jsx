import React from 'react'
import ItemDescription from '../ItemDescription/ItemDescription'
import ItemButtons from '../ItemButtons/ItemButtons'
import styles from "./card.module.css"

const Card = ({product, addPorductToCartHandler}) => {
  return (
    <div className={styles.card}>
        <ItemDescription
        name = {product.title}
        image = {product.image}
        description = {product.description}
        price = {product.price}
        ></ItemDescription>
        <p className='item-price'>${product.price}</p>
        <ItemButtons addToCart={(amount) => addPorductToCartHandler(product, amount)}></ItemButtons>
    </div>
  )
}

export default Card