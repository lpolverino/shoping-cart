import React from 'react'
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from "./products.module.css"

const Products = ({isLoading, products, addPorductToCartHandler}) => {

  let content = isLoading ? <h2>  Getting fake products </h2> 
                 :products.map((product) => <Card key={product.id} product={product} addPorductToCartHandler = {addPorductToCartHandler}></Card> )
 
  return (
    <div className={styles.products}>
      {content}
    </div>
  )
}

Products.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array
}

export default Products