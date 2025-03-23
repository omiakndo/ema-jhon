/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData()
     const [cart , setCart] = useState(savedCart)

     const hendelRemoveCart = id=>{
        console.log(id);
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
     }

     const hendelRemoveAllCart = () =>{
        setCart([])
        deleteShoppingCart();
     }

     const navigate = useNavigate()
     const hendelGoBack =()=>{
        navigate(-1)
     }
    return (
        <div className='shop'>
           <div className='mt-40 mx-auto'>
            
            {
                cart.map(item => <ReviewItem key={item.id} item ={item} hendelRemoveCart={hendelRemoveCart}></ReviewItem>)
            }
           </div>
           <div className='cart'>
            <Cart cart={cart} hendelRemoveAllCart={hendelRemoveAllCart}>
            <Link to='/checkout' >
            <button className='btn2'>Proceed Checkout</button>
            </Link>
            <button className='w-9/12 rounded-md bg-slate-500 h-12 mt-4' onClick={hendelGoBack}>Go Back</button>
            </Cart>
           </div>
        </div>
    );
};

export default Orders;