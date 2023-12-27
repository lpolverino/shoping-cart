import React from 'react'
import PropTypes from 'prop-types';
import ShopingList from '../ShopingList/ShopingList';

const Cart = ({addedProducts}) => {

  const shoppingList = addedProducts.length === 0 ? 
    <p>No products in the Cart, start buying!</p>
    :<ShopingList products = {addedProducts}></ShopingList>

  return (
    <div>
      <h2>SHopping List</h2>
      {shoppingList}
    </div>
  )

}

Cart.propTypes = {
  addedProducts: PropTypes.arrayOf( PropTypes.shape({
    amount:PropTypes.number,
    product: PropTypes.object
  }))
}

export default Cart