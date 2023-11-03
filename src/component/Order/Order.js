import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItam from '../ReviewItam/ReviewItam';
import { removeDB, removeShoppingCart } from '../../utilitise/Fakebd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Order.css'


const Order = () => {
    const{ products, initialCart} = useLoaderData()
     
    const [cart, setCart]=useState(initialCart)
    const hendelRemoveItam = (id) =>{
        const remanningItam = cart.filter(product => product.id !== id)
        setCart(remanningItam)
        removeDB(id)
       
    }
    const clereCart = () => {
        setCart([])
        removeShoppingCart()
  }

    return (
        <div  className='shop-container' >
          <div className='itam-reviev' >
             {
                cart.map(product => <ReviewItam
                key={product.id}
                product ={product}
                hendelRemoveItam ={hendelRemoveItam}
                ></ReviewItam>)
             }
               {
                cart.length === 0 && <h1>Opppps,, No itam hear !! <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <Link className='link' to='/'>Shop please</Link> </h1>
               }
          </div>
          <div  className="order-container" >
              <Cart
               cart ={cart}
               clereCart={clereCart}
               > 
               <br />
               
               </Cart>
          </div>
        </div>
    );
};

export default Order;