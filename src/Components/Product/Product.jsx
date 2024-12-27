/* eslint-disable react/prop-types */
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {img, name, seller,  price, ratings} =props.product
    
    const hendelAddToCart = props.hendelAddToCart

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='name'>{name}</h5>
            <h4 className='price'>Price:${price}</h4>
            <p className='info'>Manufacturer:{seller}</p>
            <p className='reating'>Rating: {ratings}</p>
            <button className='btn' onClick={()=>hendelAddToCart(props.product)}>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;