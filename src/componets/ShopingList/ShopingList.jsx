import React from 'react'

import PropTypes from 'prop-types';
import ShopingItem from '../ShopingItem/ShopingItem';

const ShopingList = ({products}) => {
  return (
    <ul>{
        products.map((product)=>{
        return <li key={product.product.id}>
            <ShopingItem amount={product.amount} name={product.product.title}></ShopingItem>
        </li>})
    }</ul>
  )
}

ShopingList.propTypes = {
    products: PropTypes.arrayOf( PropTypes.shape({
      amount:PropTypes.number,
      product: PropTypes.object
    }))
  }

export default ShopingList