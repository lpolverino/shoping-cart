import React from 'react'
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Products = ({isLoading, products, addPorductToCartHandler}) => {

  if (isLoading) return <h2>  Getting fake products </h2> 
  return (
    <div>
      {products.map((product) => <Card key={product.id} product={product} addPorductToCartHandler = {addPorductToCartHandler}></Card> )}
    </div>
  )
}

Products.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array
}

export default Products