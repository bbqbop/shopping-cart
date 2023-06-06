import { useState, useContext } from 'react';
import ImageGallery from './ImageGallery';
import './Item.css';
import { CartContext } from '../App';

export default function Item({name, images, description, price, index}){

    const {cart, setCart} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(!!cart[name]);

    const quantity = cart[name]?.quantity || 0
    
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
            setCart(prevCart => {
                const newCart = {...prevCart}
                delete newCart[name]
                return newCart;
            })
            setIsAdded(false);
        } else {
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

