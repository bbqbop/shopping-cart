import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App';
import getImages from '../lib/getImages';
import { Link } from 'react-router-dom';

import Item from '../components/Item';

export default function Home(){
    const items = require('../data/items.json')
    const [cartIsFull, setCartIsFull] = useState(false);
    const { cart } = useContext(CartContext);

    useEffect(()=> {
        if(Object.keys(cart).length > 0){
            setCartIsFull(true)
        }
    },[cart])

    return (
        <div className='shop'>
            <h1>Shop</h1>
            {items.map((item, index) => 
                <Item name={item.name}
                      description={item.description}
                      price={item.price}
                      images = {getImages(item.name)}
                      index={index}
                      key={index}/>                  
                      )}
            {cartIsFull && <Link to='/cart' className='continueCheckout'>Continue to checkout</Link>}
        </div>

    )
}