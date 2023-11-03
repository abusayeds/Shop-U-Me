import React, { useEffect, useState } from 'react';
import "./Products.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { add, removeShoppingCart,  } from '../../utilitise/Fakebd';
import { Link, useLoaderData } from 'react-router-dom';




const Products = () => {

    const{ products} = useLoaderData()
    const [cart , setCart] = useState([])
  


    const hendleAddTocart =(product) =>{
       const newCart =[...cart, product]
       setCart(newCart)
      add(product.id)
    }
    const clereCart = () => {
          setCart([])
          removeShoppingCart()
    }
    
      return (
          <div className='shop-container'>
              <div className=" md:grid grid-cols-3 gap-4 p-8">
               {
                products.map(product => <Product
                key={product.id}
                hendleAddTocart={hendleAddTocart}
                product={product}
                ></Product>)
               }
             
              </div>
              <div className=" p-5 bg-slate-100">
               <Cart
               cart={cart}
               clereCart ={clereCart}
               >
                 <Link to='/order'><button className='bg-white hover:bg-slate-200'>See your order</button></Link>
               </Cart>
              </div>
              
          </div>
      );
    };

export default Products;
// ********************************************************




