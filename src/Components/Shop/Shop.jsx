
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className='shop-item'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
                <h1>product</h1>
            </div>
            <div className='cart'>
                <h1>cart</h1>
            </div>
           
        </div>
    );
};

export default Shop;