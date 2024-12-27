
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

    const [cart , setCart] = useState([])
    const hendelAddToCart =(product)=>{
       const newCart = [...cart , product]
       setCart(newCart)
    }
    
        const reducer = (pre , cur) => pre + cur.price;
        const total = cart.reduce(reducer,0)
        console.log(total)

       
            const totalTax = total * 0.01
            const grandTotal = total + totalTax
    
    return (
        <div className='shop'>
            <div className='shop-item'>
            {
                products.map(product => <Product
                     key={product.id}
                      product={product}
                      hendelAddToCart={hendelAddToCart}
                     ></Product>)
            }
                <h1>product</h1>
            </div>

            <div className='cart'>
               
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: ${parseInt(totalTax)}</p>
                <h2>Grand Total: ${parseInt(grandTotal)}</h2>
                <button className='btn1'>Clear Cart</button>
                <button className='btn2'>Review Order</button>
            </div>
           
        </div>
    );
};

export default Shop;