import React from 'react'

const ItemDescription = ({name, image, description, price}) => {
  return (
    <div>
        <p className='item-name'>{name}</p>
        <img src={image} alt={"an image of " + name} className='item-image'/>
        <p className='item-description'>{description}</p>
        <p className='item-price'>${price}</p>
    </div>
  )
}

export default ItemDescription