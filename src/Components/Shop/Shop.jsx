
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    useEffect( ()=>{
        const saveCart =[]
        const storeCart = getShoppingCart();
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){
                const quantity = storeCart[id]
            addedProduct.quantity = quantity
            saveCart.push(addedProduct)
            }
            
            
            console.log(addedProduct )
         
        }
      setCart(saveCart)
        console.log(storeCart)
    },[products])
    const [cart , setCart] = useState([])
    const hendelAddToCart =(product)=>{
       const newCart = [...cart , product]
       setCart(newCart)
       addToDb(product.id)
    }
    
       
    
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
              <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;