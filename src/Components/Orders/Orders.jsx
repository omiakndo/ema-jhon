/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData()
     const [cart , setCart] = useState(savedCart)

     const hendelRemoveCart = id=>{
        console.log(id);
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
     }
    return (
        <div className='shop'>
           <div className='mt-40 mx-auto'>
            
            {
                cart.map(item => <ReviewItem key={item.id} item ={item} hendelRemoveCart={hendelRemoveCart}></ReviewItem>)
            }
           </div>
           <div className='cart'>
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;