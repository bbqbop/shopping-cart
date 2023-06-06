import { useState, useEffect } from 'react';
import getImages from '../lib/getImages';

import Item from '../components/Item';

export default function Home(){
    const items = require('../data/items.json')
    const [cart, setCart] = useState({});

    useEffect(()=>{
    })

    return (
        <div>
            <h1>Shop</h1>
            {items.map((item, index) => 
                <Item name={item.name}
                      description={item.description}
                      price={item.price}
                      quantity={cart[item.name]?.quantity || 0}
                      setCart = {setCart} 
                      images = {getImages(item.name)}
                      index={index}
                      key={index}/>                  
                      )}
        </div>

    )
}