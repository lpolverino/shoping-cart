import React from 'react'
import LinksButton from '../LinksButton/LinksButton'
import styles from "./header.module.css"
import { RiShoppingCartFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Bazar</h1>
        <nav className={styles.navigation}>
            <LinksButton link ="/" name="Home"></LinksButton>
            <LinksButton link ="shop" name="Shop"></LinksButton>
        </nav>
        <div className={styles.cartConteiner}>
            <button data-testid = "shop-element" className={styles.cart}>
              <RiShoppingCartFill className={styles.shoppingCart}></RiShoppingCartFill>
            </button>
        </div>
    </div>
  )
}

export default Header