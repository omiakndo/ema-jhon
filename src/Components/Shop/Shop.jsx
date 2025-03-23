
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
        }
      setCart(saveCart)      
    },[products]) 

    const [cart , setCart] = useState([])

    const hendelAddToCart =(product)=>{
    //    const newCart = [...cart , product]
    let newCart = []
     const exists = cart.find(pb => pb.id === product.id)
      if(!exists){
        product.quantity=1;
        newCart =[...cart,product]
      }
      else{
        exists.quantity = exists.quantity + 1;
        const remaning = cart .filter(pd => pd.id !== product.id)
        newCart = [...remaning , exists]
      }

       setCart(newCart)
       addToDb(product.id)
    }
    
       
    
    return (
        <div className='shop '>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
            {
                products.map(product => <Product
                     key={product.id}
                      product={product}
                      hendelAddToCart={hendelAddToCart}

                     ></Product>)
            }
               
            </div>

            <div className='cart'>
              <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;