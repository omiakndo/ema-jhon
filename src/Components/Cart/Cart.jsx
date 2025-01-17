/* eslint-disable react/prop-types */
import './Cart.css'


const Cart = ({cart}) => {

   

    const reducer = (pre , cur) => pre + cur.price;
    
    const total = cart.reduce(reducer,0)
    const charge = (pre , cur) => pre + cur.shipping;
    
    const shipping = cart.reduce(charge,0)
    
   


   
        const totalTax = total * 7/100
        const grandTotal = total + totalTax +shipping
    return (
        <div className='cart'>
             
             <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${parseInt(totalTax)}</p>
                <h2>Grand Total: ${parseInt(grandTotal)}</h2>
                <button className='btn1'>Clear Cart</button>
                <button className='btn2'>Review Order</button>
        </div>
    );
};

export default Cart;