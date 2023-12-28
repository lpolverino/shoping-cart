import React from 'react'
import PropTypes from 'prop-types';
import ShopingList from '../ShopingList/ShopingList';
import styles from "./cart.module.css"

const Cart = ({addedProducts, deleteProduct}) => {

  const shoppingList = addedProducts.length === 0 ? 
    <p className={styles.empty}>No products in the Cart, start buying!</p>
    :<ShopingList products = {addedProducts} deleteProduct={deleteProduct}></ShopingList>

  return (
    <div className={styles.cart}>
      <h2>Shopping List</h2>
      {shoppingList}
    </div>
  )

}

Cart.propTypes = {
  addedProducts: PropTypes.arrayOf( PropTypes.shape({
    amount:PropTypes.number,
    product: PropTypes.object
  })),
  deleteProduct:PropTypes.func
}

export default Cart