import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import './Shop.css';
import Item from '../components/Item';

import items from "../data/items.json";


export default function Shop(){
    const [cartIsFull, setCartIsFull] = useState(false);
    const { cart } = useContext(CartContext);

    useEffect(()=> {
        if(!cart) return
        if(Object.keys(cart).length > 0){
            setCartIsFull(true)
        } else {
            setCartIsFull(false);
        }
    },[cart])

    return (
        <div className='shop'>
            <h1>Shop</h1>
            <div className='items'>
                {items.map((item, index) => {
                    return(
                    <Item name={item.name}
                        description={item.description}
                        price={item.price}
                        index={index}
                        key={index}/>   
                )})}
            </div>
            {cartIsFull && <Link to='/cart' className='continueCheckout'>Continue to checkout</Link>}
        </div>

    )
}