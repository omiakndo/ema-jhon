import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () =>{
    const lodeProducts = await fetch('products.json');
    const products = await lodeProducts.json();
    

    const storedCrt = getShoppingCart();

    const savedCart = [];

    for(const id in storedCrt){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCrt[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart
}

export default cartProductLoader