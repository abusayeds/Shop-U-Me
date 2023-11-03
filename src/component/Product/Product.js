import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name , img ,price ,seller, ratings} =props.product

    return (
        <div>
            <div className='product'>
            <img src={img} alt=""  />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={ () =>props.hendleAddTocart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            </div>
          
        </div>
    );
};

export default Product;

// ***************************************************************************