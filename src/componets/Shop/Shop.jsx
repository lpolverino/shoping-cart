import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchingBar from '../SearchingBar/SearchingBar'
import Cart from "../Cart/Cart"
import Products from "../Products/Products"
import ErrorPage from '../ErrorPage/ErrorPage'
import styles from "./shop.module.css"


const filterProducts = (filter, products) =>{
  return  filter === '' ? products
    :products.filter(el => el.title.startsWith(filter))
}

const Shop = () => {

  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [shopingList, setShopingList] = useState([])

  useState( async () =>{
    const  getData = async () =>{
      const response = await fetch('https://fakestoreapi.com/products')
      if(!response.ok){
        console.log("error in fetching data", response.status)
        throw new Error("error in fetching data", response.status)
      }
      return response.json()
    }
    try{
      const data = await getData();
      setProducts(data)
      console.log(data);
      setIsLoading(false)
    } catch (e) {
      setError(e)
    }
  },[])

  const updateFilter = (e) =>{
    e.preventDefault()
    setFilter(e.target.value)
  }

  const addToCart = (product, amount) => {
      if (amount === 0) return
      const index = shopingList.findIndex((item) => item.product.id === product.id);
      if (index === -1) {
        setShopingList([ ...shopingList, {amount,product}])
      }
      else{
        const newShopingList = shopingList.map((item) =>{
          if(item.product.id === product.id) return{
            ...item, amount: item.amount + amount
          }
          return item
        })
        setShopingList(newShopingList)
      }
  }

  const deleteItemOfCart = (itemToDelete) =>{
    const newShopingList  = shopingList.filter((item) =>item.product.id !== itemToDelete.product.id)
    setShopingList(newShopingList)
  }

  const productsToShow = filterProducts(filter, products)

  if (error) return <ErrorPage msg={error}></ErrorPage>

  return (
    <div className={styles.shop}>
      <Header></Header>
      <div className={styles.shopContent}>
        <div className={styles.shopItems}>
          <SearchingBar text={filter} onChange={updateFilter}></SearchingBar>
          <Products isLoading={isLoading} products={productsToShow} addPorductToCartHandler = {(product, amount) => addToCart(product,amount)}></Products>
        </div>
        <Cart addedProducts={shopingList} deleteProduct={deleteItemOfCart}></Cart>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Shop