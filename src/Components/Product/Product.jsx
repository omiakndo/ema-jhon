import './Product.css'

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='name'>{name}</h5>
            <h4 className='price'>Price:${price}</h4>
            <p className='info'>Manufacturer:{seller}</p>
            <p className='reating'>Rating: {ratings}</p>
            <button className='btn'>Add To Cart</button>

        </div>
    );
};

export default Product;