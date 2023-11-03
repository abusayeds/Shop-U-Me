import React from 'react';
import './Cart.css'

const Cart = (props) => {
  console.log(props)
const {cart, clereCart ,children} =props

  let total =0;
  let shipping =0

  for  ( const product of cart){

    total = total +product.price 
    shipping =shipping+product.shipping
  }
  const tax = parseFloat((total *0.1).toFixed(2))
  const Grandtotal =total +shipping +tax ;

    return (
        <div className='cart'>
                <h4> Order summry</h4>
                <p>Select item : {cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Total shipping: {shipping} </p>
                <p>Tax: {tax} </p>
                <h4>Grand total: {Grandtotal}</h4>
                 {children}
                <button onClick={clereCart} className='btn-remove' >Order list remove</button>
                <br />
               
        </div>
    );
};

export default Cart;
