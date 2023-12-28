import React from 'react'
import styles from "./shopingItem.module.css"
import { RiDeleteBackLine } from "react-icons/ri";

const ShopingItem = ({amount, name, onDelete}) => {
  return (
    <div className={styles.item}>
        <p>{amount}</p>
        <p>{name}</p>
        <button onClick={() => onDelete() }>
          <RiDeleteBackLine></RiDeleteBackLine>
        </button>
    </div>
  )
}

export default ShopingItem