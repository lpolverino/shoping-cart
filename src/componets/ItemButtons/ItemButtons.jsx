import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./itemButtons.module.css"

const ItemButtons = ({addToCart}) => {
    const [amount, setAmout] = useState(0)

    const onClickHandler = (e) => {
      e.preventDefault()
      addToCart(amount)
    }
  return (
    <div className={styles.addButons}> 
        <button onClick={(e) => setAmout(amount +1)}>
          <FaPlus className={styles.plus}></FaPlus>
        </button>
        <p>{amount}</p>
        <button onClick={(e) => setAmout(amount -1)}>
          <FaMinus></FaMinus>
        </button>
        <button className={styles.addCart} onClick={(e) => onClickHandler(e) }>Add To Cart</button>
    </div>
  )
}

export default ItemButtons