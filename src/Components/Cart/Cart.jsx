/* eslint-disable react/prop-types */
import './Cart.css'


const Cart = ({cart, hendelRemoveAllCart, children}) => {

   let quantity = 0;
   let  totalPrice = 0;
   for (const product of cart){
    totalPrice = totalPrice + product.price * product.quantity
    // product.quantity = product.quantity || 1;
    quantity = quantity + product.quantity;
   }

    
   

    const charge = (pre , cur) => pre + cur.shipping;
    
    const shipping = cart.reduce(charge,0)
    
   


   
        const totalTax =  totalPrice * 7/100
        const grandTotal =  totalPrice + totalTax +shipping
    return (
        <div className='cart'>
             
             <h1 className='font-bold text-2xl mb-4'>Order Summary</h1>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${ totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${parseInt(totalTax)}</p>
                <h2>Grand Total: ${parseInt(grandTotal)}</h2>
                <button onClick={hendelRemoveAllCart} className='btn1'>Clear All Cart</button>
                {children}
        </div>
    );
};

export default Cart;