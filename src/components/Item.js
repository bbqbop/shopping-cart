import { useState} from 'react';
import ImageGallery from './ImageGallery';
import './Item.css';

export default function Item({name, images, description, price, quantity, setCart, index}){

    const [isAdded, setIsAdded] = useState(false);
    
    function addToCart(){
        setIsAdded(true);
        setCart(prevCart => {
            return {
                ...prevCart, 
                [name]: {
                    price: parseFloat(price), 
                    quantity: 1
                }
            }
        })
    } 

    function changeQuantity(e) {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity <= 0){
            setIsAdded(false)
        }
        setCart(prevCart => {
            return {
                ...prevCart,
                [name]: {
                    ...prevCart[name],
                    quantity: newQuantity
                }
            };
        });
    }
    

    return(
        <div className="Item">
            <h3>{name}</h3>
            {images.length >= 0 && <ImageGallery images = {images} name = {name} index={index}/>}
            <p>{description}</p>
            <div className="ItemInput">
            <legend>Price ${price}
            {isAdded ? (
                <>
                <input type="number" id="quantityInput" min="0" value={quantity} onChange={changeQuantity}/>
                </>
                ) : (
                    <button onClick={addToCart}>Add to cart</button>
                )}
            </legend>
        </div>
        </div>
    )
}

