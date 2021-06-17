import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions';

const ProductDetail = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showMore, isShowMore] = React.useState(false);
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
      setIsLoading(false);
    } catch (error) {
      console.error();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) fetchProductDetail();
    // return () => dispatch(removeSelectedProduct())
  }, [productId]);

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <div className='sm:flex max-w-4xl my-5 mx-auto border border-gray-200'>
      <img className='mx-auto w-auto max-w-xs ' src={image} />
      <div className='p-6 place-items-center'>
        <h1 className='font-bold text-center text-2xl'>{title}</h1>
        <div className='bg-green-900 inline-block px-5 py-1 my-5 rounded text-md font-bold text-white'>
          ${price}
        </div>
        <div className='bg-gray-300 mb-4 py-1 px-3 rounded border border-gray-400'>
          {category}
        </div>
        <p className='text-gray-600 mb-4'>
          {showMore ? description : description.slice(0, 120)}
          <button
            onClick={() => isShowMore(!showMore)}
            className='text-blue-400 font-bold hover:text-blue-600 transition-all'
          >
            Show {showMore ? 'less' : 'more'}
          </button>
        </p>
        <button className='bg-red-500 text-white font-bold px-7 py-1 rounded-full hover:bg-red-800 transition-all	 '>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
