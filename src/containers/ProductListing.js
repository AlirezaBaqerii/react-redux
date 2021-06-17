import React, {useEffect} from 'react';
import axios from 'axios';
import ProductComponant from './ProductComponant';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productActions'

const ProductListing = () => {
 // const products = useSelector(state => state);
 const dispatch = useDispatch()

 const url = 'https://fakestoreapi.com/products'

 const fetchProducts = async () => {
  try {
   const response = await axios.get(url);
   dispatch(setProducts(response.data));
  } catch (error) {
   console.log(error);
  }
 }

 useEffect(()=> {
  fetchProducts();
 }, [])

 return (
  <div className="container bg-gray-100 mx-auto">
   <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
    <ProductComponant />
   </div>
  </div>
 )
}

export default ProductListing
