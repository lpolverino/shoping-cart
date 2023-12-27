import React from 'react'
import ItemDescription from '../ItemDescription/ItemDescription'
import ItemButtons from '../ItemButtons/ItemButtons'

const Card = ({product, addPorductToCartHandler}) => {
  return (
    <div>
        <ItemDescription
        name = {product.title}
        image = {product.image}
        description = {product.description}
        price = {product.price}
        ></ItemDescription>
        <ItemButtons addToCart={(amount) => addPorductToCartHandler(product, amount)}></ItemButtons>

    </div>
  )
}

export default Card