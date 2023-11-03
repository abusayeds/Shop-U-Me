import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name , img ,price ,seller, ratings} =props.product

    return (
        <div className='border my-4 rounded h-full product '>
            
          <div>
          <img className='md:h-80 w-full' src={img} alt=""  />
          </div>


           <div className='p-4 '>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            
           </div>
           <div className=' flex justify-center '>
          <div className='btn-cart '>
          <button onClick={ () =>props.hendleAddTocart(props.product)} className='   p-2 rounded'>
            <p className='text-red-500 font-bold'>Add to Cart  <FontAwesomeIcon className='text-red-500' icon={faShoppingCart}></FontAwesomeIcon></p>
        
            </button>
          </div>
           </div>


          
            </div>
          
       
    );
};

export default Product;

// ***************************************************************************