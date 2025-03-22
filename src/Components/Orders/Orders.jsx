/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Orders = () => {
    const cart = useLoaderData()
    console.log(cart);
    return (
        <div className='shop'>
           <div className='shop-item'>
            <h2>Order pages: {cart.length}</h2>
           </div>
           <div className='cart'>
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;