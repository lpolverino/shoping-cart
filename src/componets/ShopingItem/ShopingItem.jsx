import React from 'react'

const ShopingItem = ({amount, name}) => {
  return (
    <div>
        <p>{amount}</p>
        <p>{name}</p>
    </div>
  )
}

export default ShopingItem