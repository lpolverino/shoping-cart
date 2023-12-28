import React from 'react'
import styles from "./shopingItem.module.css"
import { RiDeleteBackLine } from "react-icons/ri";

const ShopingItem = ({amount, name}) => {
  return (
    <div className={styles.item}>
        <p>{amount}</p>
        <p>{name}</p>
        <button onClick={() => console.log("delete") }>
          <RiDeleteBackLine></RiDeleteBackLine>
        </button>
    </div>
  )
}

export default ShopingItem