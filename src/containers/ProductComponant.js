import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProductComponant = () => {
 const products = useSelector(state => state.allProducts.products);
 const renderList = products.map( product => {
  const {id, title, image, price, category} = product;
  return (
   <Link to={`/product/${id}`}>
   <div key={id} className="max-w-sm overflow-hidden shadow-md inline-block group border-indigo-500 hover:shadow-lg cursor-pointer ">
    <img className="h-md" src={image} alt={title} />
    <div className="px-6 py-4">
     <div className="font-bold text-gray-900 text-lg">{title}</div>
     <div className="font-bold text-gray-700 text-md">${price}</div>
     <div className="text-gray-500 text-md">{category}</div>
    </div>
   </div>
   </Link>
  );
 } ) 
 return (
  <>{renderList}</>
 )
}

export default ProductComponant;
