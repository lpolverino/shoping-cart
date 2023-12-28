import React from 'react'
import styles from "./shopingList.module.css"

import PropTypes from 'prop-types';
import ShopingItem from '../ShopingItem/ShopingItem';

const ShopingList = ({products}) => {
  return (
    <ul className={styles.list}>{
        products.map((product)=>{
        return <li key={product.product.id} className={styles.item}>
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