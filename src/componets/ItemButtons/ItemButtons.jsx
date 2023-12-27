import React, { useState } from 'react'

const ItemButtons = ({addToCart}) => {
    const [amount, setAmout] = useState(0)

    const onClickHandler = (e) => {
      e.preventDefault()
      addToCart(amount)
    }
  return (
    <div>
        <button onClick={(e) => setAmout(amount +1)}>+</button>
        <p>{amount}</p>
        <button onClick={(e) => setAmout(amount -1)}>-</button>
        <button onClick={(e) => onClickHandler(e) }>Add To Cart</button>
    </div>
  )
}

export default ItemButtons