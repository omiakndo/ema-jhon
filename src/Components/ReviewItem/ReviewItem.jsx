/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import './Review.css'

const ReviewItem = ({item , hendelRemoveCart}) => {
    const {id, name, img, price, quantity, shipping} = item
    return (
        <div  className='review flex justify-between border border-gray-500 rounded-md mb-3 p-3 '>
           <div className='flex'>
            <img className='w-24 rounded-md' src={img} alt="" />
            <div className='ms-3 mt-3'>
                <h1 className='font-bold'>{name}</h1>
                <p>price: <span className='text-yellow-400 font-bold'>${price}</span></p>
                <p>Shipping Charge:<span className='text-yellow-400 font-bold'> ${shipping}</span> </p>
                <p>Quantity: {quantity}</p>
            </div>
           </div>
           <button onClick={()=>hendelRemoveCart(id)} className='my-auto me-2'>
           <TrashIcon className="size-10 text-red-500 " />
           </button>
        </div>
    );
};

export default ReviewItem;